import ProfilePanel, { ProfileData } from "@/components/Profile/profile-panel";
import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors, Styles } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import profileData from "@/mock/profile.json";
import profileEventsData from "@/mock/profile-events.json";
import EventCard, {
  EventCardStatus,
  type EventData,
} from "@/components/Profile/event-card";
import { Segment } from "@/components/Profile/Segment";

export default function ProfileScreen() {
  const events = profileEventsData as EventData[];
  const [tab, setTab] = useState<EventCardStatus>("Предстоит");
  const segmentedBg = useThemeColor({}, "surface");
  const segmentedBorder = useThemeColor({}, "surface");
  const segmentActiveBg = useThemeColor({}, "background");

  const { upcoming, past } = useMemo(() => {
    const now = Date.now();
    const upcomingEvents: EventData[] = [];
    const pastEvents: EventData[] = [];

    for (const event of events) {
      let startAt = NaN;
      if (event.startAt) {
        let parts = event.startAt.split(".");
        if (parts.length === 3) {
          startAt = new Date(
            parseInt(parts[2]),
            parseInt(parts[1]) - 1,
            parseInt(parts[0])
          ).getTime();
        }
      }
      if (!Number.isNaN(startAt)) {
        if (startAt >= now) upcomingEvents.push(event);
        else pastEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    }

    return { all: events, upcoming: upcomingEvents, past: pastEvents };
  }, [events]);

  const filteredEvents = tab === "Предстоит" ? upcoming : past;

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ProfilePanel
          data={profileData as ProfileData}
          eventsCount={events.length}
          style={styles.profilePanel}
        />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="ribbon-outline" size={20} color={Colors.tint} />
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Ваши мероприятия
            </ThemedText>
          </View>

          <View
            style={[
              styles.segmented,
              { backgroundColor: segmentedBg, borderColor: segmentedBorder },
            ]}
          >
            <Segment
              label="Предстоит"
              active={tab === "Предстоит"}
              activeBg={segmentActiveBg}
              onPress={() => setTab("Предстоит")}
            />
            <Segment
              label="Прошло"
              active={tab === "Прошло"}
              activeBg={segmentActiveBg}
              onPress={() => setTab("Прошло")}
            />
          </View>

          {filteredEvents.length === 0 ? (
            <ThemedView style={styles.emptyState}>
              <ThemedText type="default" style={styles.emptyText}>
                No events to show.
              </ThemedText>
            </ThemedView>
          ) : (
            <View style={styles.eventList}>
              {filteredEvents.map((data, key) => (
                <EventCard
                  data={data}
                  key={`${tab}-${key}`}
                  status={tab}
                  style={styles.eventCard}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePanel: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    paddingBottom: 24,
  },
  section: {
    paddingHorizontal: 14,
    paddingTop: 16,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    letterSpacing: -0.1,
  },
  segmented: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 999,
    borderWidth: 1,
    gap: 6,
  },
  eventList: {
    gap: 14,
    paddingTop: 6,
  },
  eventCard: {
    ...Styles.elevated,
  },
  emptyState: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "transparent",
  },
  emptyText: {
    textAlign: "center",
    opacity: 0.7,
  },
});
