import ProfilePanel, { ProfileData } from "@/components/Profile/profile-panel";
import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors, Styles } from "@/constants/theme";
import { ScrollView, StyleSheet } from "react-native";
import profileData from "@/mock/profile.json";
import profileEventsData from "@/mock/profile-events.json";
import EventCard from "@/components/Profile/event-card";

export default function ProfileScreen() {
  return (
    <ThemedView
      darkColor={Colors.dark["background"]}
      lightColor={Colors.light["background"]}
      style={styles.container}
    >
      <ProfilePanel
        data={profileData as ProfileData}
        style={styles.profilePanel}
      />
      <ScrollView contentContainerStyle={styles.eventList}>
        <ThemedText type="subtitle">История мероприятий:</ThemedText>
        {profileEventsData.map((event, key) => {
          return <EventCard data={event} style={styles.eventCard} key={key} />;
        })}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePanel: {
    ...Styles.elevated,
    ...Styles.glowing,
    zIndex: 10,
  },
  eventCard: {
    ...Styles.elevated,
    ...Styles.glowing,
  },
  eventList: {
    minHeight: "100%",
    height: "auto",
    flexGrow: 1,
    padding: 12,
    paddingVertical: 18,
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
});
