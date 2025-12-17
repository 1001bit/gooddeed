import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";
import { ThemedText } from "@/components/custom-text";

interface BadgeProps {
  value: string | number;
  title: string;
}

export default function ProfileBadge(props: BadgeProps) {
  return (
    <View style={styles.badge}>
      <ThemedText
        lightColor={Colors.dark.text}
        darkColor={Colors.dark.text}
        type="profileStatValue"
      >
        {props.value}
      </ThemedText>
      <ThemedText
        lightColor={Colors.dark.text}
        darkColor={Colors.dark.text}
        type="profileStatLabel"
      >
        {props.title}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 18,
    gap: 4,
    backgroundColor: "#ffffff0f",
    borderRadius: 14,
    flex: 1,
    minHeight: 74,
  },
});
