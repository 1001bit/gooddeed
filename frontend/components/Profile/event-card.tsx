import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeColor } from "@/hooks/use-theme-color";
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Chip } from "@/components/chip";
import { MetaRow } from "../metarow";

export interface EventData {
  image: string;
  text: string;
  region: string;
  hours: number;
  people: number;
  holder: string;
  startAt?: string;
}

export type EventCardStatus = "Предстоит" | "Прошло";

interface EventCardProps {
  data: EventData;
  status?: EventCardStatus;
  style?: StyleProp<ViewStyle>;
  onPressDetails?: () => void;
}

export default function EventCard(props: EventCardProps) {
  const scheme = useColorScheme() ?? "light";
  const cardBg = useThemeColor({}, "surface");
  const iconColor = useThemeColor({}, "icon");

  const statusLabel = props.status ?? "Предстоит";
  const statusBg = useThemeColor({}, "background");
  const statusFg = useThemeColor({}, "text");

  return (
    <ThemedView style={[styles.card, { backgroundColor: cardBg }, props.style]}>
      <View style={styles.heroWrap}>
        <Image source={{ uri: props.data.image }} style={styles.heroImage} />
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

        <Pressable
          accessibilityRole="button"
          onPress={props.onPressDetails}
          style={({ pressed }) => [
            styles.detailsButton,
            {
              borderColor: Colors.tint,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          <ThemedText
            type="default"
            style={[styles.detailsButtonText, { color: Colors.tint }]}
          >
            Посмотреть
          </ThemedText>
        </Pressable>
      </View>
    </ThemedView>
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
