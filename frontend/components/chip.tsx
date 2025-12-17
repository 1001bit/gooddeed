import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/custom-text";

export function Chip({
  label,
  backgroundColor,
  textColor,
  scheme,
}: {
  label: string;
  backgroundColor: string;
  textColor: string;
  scheme: "light" | "dark";
}) {
  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor,
          borderColor:
            scheme === "dark"
              ? "rgba(255,255,255,0.12)"
              : "rgba(15,23,42,0.12)",
        },
      ]}
    >
      <ThemedText
        type="default"
        style={[styles.chipText, { color: textColor }]}
      >
        {label}
      </ThemedText>
    </View>
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
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "600",
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
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  metaText: {
    opacity: 0.9,
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
