import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView
      darkColor={Colors.dark["background"]}
      lightColor={Colors.light["background"]}
      style={styles.container}
    >
      <ThemedText type="title">GoodDeed</ThemedText>
      <ThemedText type="subtitle">Welcome to your new app shell.</ThemedText>
      <ThemedText>
        Start building your experience here. Remove or replace these
        placeholders with your real screens, components, and navigation as you
        go.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
    justifyContent: "center",
  },
});
