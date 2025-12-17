import { ThemedText } from "@/components/custom-text";
import { Pressable, StyleSheet } from "react-native";

export function Segment({
  label,
  active,
  activeBg,
  onPress,
}: {
  label: string;
  active: boolean;
  activeBg: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.segment,
        active ? { backgroundColor: activeBg } : null,
        { opacity: pressed ? 0.9 : 1 },
      ]}
    >
      <ThemedText
        type="default"
        style={[styles.segmentText, active ? styles.segmentTextActive : null]}
      >
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  segment: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: "center",
  },
  segmentText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "600",
    opacity: 0.8,
  },
  segmentTextActive: {
    opacity: 1,
  },
});
