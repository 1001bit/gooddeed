import { useMemo } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  View,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors, Fonts } from "@/constants/theme";
import { Chip } from "@/components/chip";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { EventData } from "@/mock/profile-events";

type EventDetailsParams = {
  event?: string | string[];
};

type EventPayload = EventData | null;

export default function EventDetailsScreen() {
  const params = useLocalSearchParams<EventDetailsParams>();
  const router = useRouter();
  const scheme = useColorScheme() ?? "light";
  const surface = useThemeColor({}, "surface");
  const text = useThemeColor({}, "text");
  const iconBg = useThemeColor({}, "background");
  const iconFg = Colors.tint;

  const eventPayload = useMemo<EventPayload>(() => {
    const raw = Array.isArray(params.event) ? params.event[0] : params.event;
    if (!raw) return null;
    try {
      return JSON.parse(raw) as EventData;
    } catch (error) {
      console.warn("Failed to parse event payload", error);
      return null;
    }
  }, [params.event]);

  const title = eventPayload?.text ?? "Мероприятие";
  const subtitle = eventPayload?.holder ?? "Организатор не указан";
  const participationLabel = eventPayload?.startAt
    ? `Вы учавствуете ${eventPayload.startAt}`
    : "Вы учавствуете";

  const details = [
    {
      icon: "calendar-outline" as const,
      label: "Дата",
      value: eventPayload?.startAt ?? "Не указана",
    },
    {
      icon: "time-outline" as const,
      label: "Длительность",
      value:
        eventPayload?.hours != null
          ? `${eventPayload.hours} часов`
          : "Не указана",
    },
    {
      icon: "location-outline" as const,
      label: "Локация",
      value: eventPayload?.region ?? "Не указана",
    },
    {
      icon: "people-outline" as const,
      label: "Участники",
      value:
        eventPayload?.people != null
          ? `${eventPayload.people} человек`
          : "Не указано",
    },
  ];

  const handleShare = async () => {
    if (!eventPayload) return;
    try {
      await Share.share({
        title: eventPayload.text,
        message: `${eventPayload.text} — ${eventPayload.region} · ${eventPayload.startAt}`,
      });
    } catch (error) {
      console.warn("Share failed", error);
    }
  };

  const backendHost = process.env.EXPO_PUBLIC_BACKEND_HOST;
  const imageUri = backendHost
    ? backendHost + "/image/event/" + eventPayload?.id
    : "";

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroWrap}>
          <Image source={{ uri: imageUri }} style={styles.hero} />

          <View style={styles.heroTop}>
            <Pressable
              accessibilityRole="button"
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.iconButton,
                { opacity: pressed ? 0.85 : 1, backgroundColor: surface },
              ]}
            >
              <Ionicons name="chevron-back" size={22} color={text} />
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={handleShare}
              disabled={!eventPayload}
              style={({ pressed }) => [
                styles.iconButton,
                { opacity: pressed ? 0.85 : 1, backgroundColor: surface },
                !eventPayload && styles.disabled,
              ]}
            >
              <Ionicons name="share-social-outline" size={20} color={text} />
            </Pressable>
          </View>

          <View style={styles.statusPill}>
            <Chip
              label={eventPayload?.past ? "Прошло" : "Предстоит"}
              backgroundColor={surface}
              textColor={text}
              scheme={scheme}
            />
          </View>
        </View>

        {eventPayload && !eventPayload.past ? (
          <View style={styles.participationWrap} pointerEvents="none">
            <View style={styles.participationBadge}>
              <ThemedText style={styles.participationText}>
                {participationLabel}
              </ThemedText>
            </View>
          </View>
        ) : null}

        <ThemedView style={[styles.card, { backgroundColor: surface }]}>
          <ThemedText type="title" style={styles.title}>
            {title}
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            {subtitle}
          </ThemedText>

          <View style={styles.metaList}>
            {details.map((detail, idx) => (
              <View key={`${detail.label}-${idx}`} style={styles.metaRow}>
                <View
                  style={[
                    styles.metaIcon,
                    { backgroundColor: iconBg, borderColor: Colors.tint },
                  ]}
                >
                  <Ionicons name={detail.icon} size={22} color={iconFg} />
                </View>
                <View style={styles.metaTextWrap}>
                  <ThemedText type="subtitle" style={styles.metaLabel}>
                    {detail.label}
                  </ThemedText>
                  <ThemedText style={styles.metaValue}>
                    {detail.value}
                  </ThemedText>
                </View>
              </View>
            ))}
          </View>
        </ThemedView>

        <ThemedView style={[styles.card, { backgroundColor: surface }]}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            О мероприятии
          </ThemedText>
          <ThemedText style={styles.description}>
            {eventPayload?.description}
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
    gap: 16,
  },
  heroWrap: {
    position: "relative",
  },
  hero: {
    width: "100%",
    height: 260,
  },
  heroFallback: {
    backgroundColor: "#dbeafe",
  },
  heroTop: {
    position: "absolute",
    top: 42,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
  },
  disabled: {
    opacity: 0.5,
  },
  statusPill: {
    position: "absolute",
    bottom: 12,
    left: 12,
  },
  participationWrap: {
    marginHorizontal: 16,
  },
  participationBadge: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.tint,
    alignItems: "center",
  },
  participationText: {
    color: "#fff",
    fontWeight: "700",
  },
  card: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  title: {
    letterSpacing: -0.1,
  },
  subtitle: {
    opacity: 0.8,
  },
  metaList: {
    gap: 12,
  },
  metaRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  metaIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  metaTextWrap: {
    flex: 1,
    gap: 2,
  },
  metaLabel: {
    fontSize: 14,
    lineHeight: 18,
  },
  metaValue: {
    fontSize: 16,
    lineHeight: 22,
  },
  sectionTitle: {
    letterSpacing: -0.1,
  },
  description: {
    lineHeight: 22,
    fontFamily: Fonts.rounded,
  },
});
