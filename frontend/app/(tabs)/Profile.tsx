import ProfilePanel from "@/components/Profile/profile-panel";
import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <ThemedView
      darkColor={Colors.dark["background"]}
      lightColor={Colors.light["background"]}
      style={styles.container}
    >
      <ProfilePanel
        name="Шалманов Максим"
        pfp="https://i.ytimg.com/vi/1l6jKYa2wMQ/maxresdefault.jpg"
        role="Волонтёр"
        region="Минск"
        hours={100}
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
