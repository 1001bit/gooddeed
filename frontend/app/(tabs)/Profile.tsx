import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.title}>Explore</ThemedText>
      <ThemedText style={styles.body}>
        This tab is ready for your features. Swap in your own components, data fetching, and
        navigation flows as you build.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
});
