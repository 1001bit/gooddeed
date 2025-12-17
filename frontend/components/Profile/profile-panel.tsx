import { ThemedText } from "@/components/custom-text";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Colors } from "@/constants/theme";
import ProfileBadge from "./profile-badge";

export interface ProfileData {
  pfp: string;
  name: string;
  role: "Волонтёр" | "Организатор";
  region: string;
  hours: number;
}

interface ProfilePanelProps {
  data: ProfileData;
  eventsCount: number;
  style?: StyleProp<ViewStyle>;
}

export default function ProfilePanel(props: ProfilePanelProps) {
  return (
    <View style={[styles.profilePanel, props.style]}>
      <View style={styles.centerContent}>
        <Image
          source={{
            uri: props.data.pfp,
          }}
          style={styles.pfp}
        />

        <ThemedText
          type="profileName"
          lightColor={Colors.dark.text}
          darkColor={Colors.dark.text}
        >
          {props.data.name}
        </ThemedText>
        <ThemedText
          type="profileRole"
          lightColor={Colors.dark.text}
          darkColor={Colors.dark.text}
        >
          {props.data.role}
        </ThemedText>
      </View>

      <View style={styles.statsRow}>
        <ProfileBadge title="Часов" value={props.data.hours} />
        <ProfileBadge title="Участий" value={props.eventsCount} />
        <ProfileBadge title="Регион" value={props.data.region} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePanel: {
    paddingHorizontal: 16,
    paddingTop: 36,
    paddingBottom: 18,
    backgroundColor: Colors.tint,
  },
  settingsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 20,
    gap: 10,
  },
  pfp: {
    height: 104,
    width: 104,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 9999,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 8,
  },
});
