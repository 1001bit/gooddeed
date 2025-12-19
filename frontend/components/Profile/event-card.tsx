import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Image } from "expo-image";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Chip } from "@/components/chip";
import { MetaRow } from "../metarow";
import { EventData } from "@/mock/profile-events";

interface EventCardProps {
  data: EventData;
  style?: StyleProp<ViewStyle>;
  onPressDetails?: () => void;
}

export default function EventCard(props: EventCardProps) {
  const scheme = useColorScheme() ?? "light";
  const cardBg = useThemeColor({}, "surface");
  const iconColor = useThemeColor({}, "icon");

  const statusLabel = props.data.past ? "Прошло" : "Предстоит";
  const statusBg = useThemeColor({}, "background");
  const statusFg = useThemeColor({}, "text");

  const backendHost = process.env.EXPO_PUBLIC_BACKEND_HOST;
  const imageUri = backendHost
    ? backendHost + "/image/event/" + props.data.id
    : "";

  return (
    <Pressable onPress={props.onPressDetails}>
      <ThemedView
        style={[styles.card, { backgroundColor: cardBg }, props.style]}
      >
        <View style={styles.heroWrap}>
          <Image
            source={{ uri: imageUri }}
            style={styles.heroImage}
            cachePolicy="none"
          />
          <View style={styles.heroOverlay}>
            {statusLabel ? (
              <Chip
                label={statusLabel}
                scheme={scheme}
                backgroundColor={statusBg}
                textColor={statusFg}
              />
            ) : null}
          </View>
        </View>

        <View style={styles.body}>
          <ThemedText type="subtitle" style={styles.title}>
            {props.data.text}
          </ThemedText>
          <ThemedText type="default" style={styles.subtitle}>
            {props.data.holder}
          </ThemedText>

          <View style={styles.metaList}>
            <MetaRow
              icon="location-outline"
              iconColor={iconColor}
              text={`${props.data.region}`}
            />
            <MetaRow
              icon="time-outline"
              iconColor={iconColor}
              text={`${props.data.hours} часов`}
            />
            <MetaRow
              icon="people-outline"
              iconColor={iconColor}
              text={`${props.data.people} участников`}
            />
            <MetaRow
              icon="calendar-outline"
              iconColor={iconColor}
              text={`${props.data.startAt}`}
            />
          </View>
        </View>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    overflow: "hidden",
  },
  heroWrap: {
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: 160,
  },
  heroOverlay: {
    position: "absolute",
    top: 12,
    left: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  body: {
    padding: 14,
    gap: 10,
  },
  title: {
    letterSpacing: -0.1,
  },
  subtitle: {
    opacity: 0.75,
  },
  metaList: {
    gap: 6,
  },
  detailsButton: {
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  detailsButtonText: {
    fontWeight: "700",
  },
});
