import ProfilePanel, { ProfileData } from "@/components/Profile/profile-panel";
import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
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
        {profileEventsData.map((event, key) => {
          return <EventCard data={event} style={styles.eventCard} key={key} />;
        })}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  profilePanel: {},
  eventCard: {},
  eventList: {
    minHeight: "100%",
    padding: 12,
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
});
