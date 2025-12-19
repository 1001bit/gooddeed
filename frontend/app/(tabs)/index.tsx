import ProfilePanel from "@/components/Profile/profile-panel";
import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors, Styles } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useMemo, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { getProfileMock, ProfileData } from "@/mock/profile";
import { EventData, getProfileEventsMock } from "@/mock/profile-events";
import { Segment } from "@/components/Segment";
import { useRouter } from "expo-router";
import EventCard from "@/components/Profile/event-card";

export default function ProfileScreen() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>(() =>
    getProfileMock()
  );
  const [events, setEvents] = useState<EventData[]>(() =>
    getProfileEventsMock()
  );
  const [tabPast, setTabPast] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);
  const segmentedBg = useThemeColor({}, "surface");
  const segmentedBorder = useThemeColor({}, "surface");
  const segmentActiveBg = useThemeColor({}, "background");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setProfileData(getProfileMock());
    setEvents(getProfileEventsMock());
    setRefreshing(false);
  }, []);

  const { upcoming, past } = useMemo(() => {
    const upcomingEvents: EventData[] = [];
    const pastEvents: EventData[] = [];

    for (const event of events) {
      if (event.past) {
        pastEvents.push(event);
      } else {
        upcomingEvents.push(event);
      }
    }

    return { all: events, upcoming: upcomingEvents, past: pastEvents };
  }, [events]);

  const filteredEvents = tabPast ? past : upcoming;
  const isOrganizer = profileData.role === "Организатор";

  const openEventDetails = (event: EventData) => {
    router.push({
      pathname: "/event-details",
      params: {
        event: JSON.stringify({ ...event, status: tabPast }),
      },
    });
  };

  const openOrganize = () => {
    router.push("/organize");
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={Colors.tint}
            colors={[Colors.tint]}
          />
        }
      >
        <ProfilePanel
          data={profileData}
          eventsCount={past.length}
          style={styles.profilePanel}
        />

        {isOrganizer ? (
          <Pressable
            accessibilityRole="button"
            onPress={openOrganize}
            style={({ pressed }) => [
              styles.organizeButton,
              { opacity: pressed ? 0.9 : 1 },
            ]}
          >
            <Ionicons name="add-circle-outline" size={18} color="#fff" />
            <ThemedText type="subtitle" style={styles.organizeButtonText}>
              Организовать
            </ThemedText>
          </Pressable>
        ) : null}

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
              active={!tabPast}
              activeBg={segmentActiveBg}
              onPress={() => setTabPast(false)}
            />
            <Segment
              label="Прошло"
              active={tabPast}
              activeBg={segmentActiveBg}
              onPress={() => setTabPast(true)}
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
                  key={`${tabPast}-${key}`}
                  style={styles.eventCard}
                  onPressDetails={() => openEventDetails(data)}
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
  organizeButton: {
    ...Styles.elevated,
    marginHorizontal: 14,
    marginTop: 12,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: Colors.tint,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  organizeButtonText: {
    color: "#fff",
    fontWeight: "700",
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
