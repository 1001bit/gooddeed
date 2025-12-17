import ProfilePanel, { ProfileData } from "@/components/Profile/profile-panel";
import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet } from "react-native";
import profileData from "@/mock/profile.json";

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
      ></ProfilePanel>
      <ScrollView>
        <ThemedText type="title" style={[{ height: 1000 }]}>
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
          ProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasdProfileasdsadasd
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  profilePanel: {},
});
