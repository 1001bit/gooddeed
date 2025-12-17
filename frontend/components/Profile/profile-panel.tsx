import { ThemedView } from "@/components/themed-view";
import { StyledText, ThemedText } from "@/components/custom-text";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Badge from "@/components/badge";
import { Colors } from "@/constants/theme";

export interface ProfileData {
  pfp: string;
  name: string;
  role: "Волонтёр" | "Организатор";
  region: string;
  hours: Number;
}

interface ProfilePanelProps {
  data: ProfileData;
  style?: StyleProp<ViewStyle>;
}

export default function ProfilePanel(props: ProfilePanelProps) {
  return (
    <ThemedView style={[styles.profilePanel, props.style]}>
      <View style={styles.row}>
        <Image
          source={{
            uri: props.data.pfp,
          }}
          style={styles.pfp}
        />
        <View style={styles.col}>
          <ThemedText type="subtitle">{props.data.name}</ThemedText>
          <View style={styles.row}>
            <Badge type="primary">
              <StyledText
                type="defaultSemiBold"
                style={[{ color: Colors.dark["text"] }]}
              >
                {props.data.role}
              </StyledText>
            </Badge>
            <Badge type="secondary">
              <ThemedText type="defaultSemiBold">
                {props.data.region}
              </ThemedText>
            </Badge>
          </View>
        </View>
      </View>
      <ThemedText type="defaultLarge">
        {String(props.data.hours)} часов
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  pfp: {
    height: "auto",
    aspectRatio: 1,
    borderRadius: 1000,
  },
  profilePanel: {
    padding: 20,
    paddingTop: 40,
    gap: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
