import { ThemedView } from "@/components/themed-view";
import { StyledText, ThemedText } from "@/components/custom-text";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Badge from "@/components/badge";
import { Colors } from "@/constants/theme";

export interface EventData {
  image: string;
  name: string;
  region: string;
  hours: Number;
  people: Number;
  holder: string;
}

interface EventCardPropsProps {
  data: EventData;
  style?: StyleProp<ViewStyle>;
}

export default function EventCard(props: EventCardPropsProps) {
  return (
    <ThemedView style={[styles.eventCard, props.style]}>
      <View style={styles.row}>
        <Image
          source={{
            uri: props.data.image,
          }}
          style={styles.image}
        />
        <View style={styles.col}>
          <ThemedText type="subtitle" style={{ flexShrink: 1 }}>
            {props.data.name}
          </ThemedText>
          <View style={styles.row}>
            <Badge type="primary">
              <StyledText
                type="default"
                style={[{ color: Colors.dark["text"] }]}
              >
                {props.data.holder}
              </StyledText>
            </Badge>
            <Badge type="secondary">
              <ThemedText type="default">{props.data.region}</ThemedText>
            </Badge>
          </View>
        </View>
      </View>
      <View style={[styles.row]}>
        <ThemedText>{String(props.data.people)} участников</ThemedText>
        <ThemedText>{String(props.data.hours)} часов</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  image: {
    height: "auto",
    aspectRatio: 1,
    borderRadius: 18,
  },
  eventCard: {
    padding: 20,
    gap: 12,
    borderRadius: 20,
  },
});
