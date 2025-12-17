import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/custom-text";

export function MetaRow({
  icon,
  iconColor,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  text: string;
}) {
  return (
    <View style={styles.metaRow}>
      <Ionicons name={icon} size={16} color={iconColor} />
      <ThemedText type="default" style={styles.metaText}>
        {text}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  metaText: {
    opacity: 0.9,
  },
});
