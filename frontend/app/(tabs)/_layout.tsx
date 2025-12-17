import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function TabLayout() {
  const tabIcons = {
    index: ["home-outline", "home"] as const,
    Events: ["calendar-outline", "calendar"] as const,
  };

  const tabBarActiveTintColor = useThemeColor({}, "tabIconSelected");
  const tabBarInactiveTintColor = useThemeColor({}, "tabIconDefault");
  const tabBarBackgroundColor = useThemeColor({}, "surface");

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
        tabBarStyle: { backgroundColor: tabBarBackgroundColor },
        tabBarIcon: ({ color, size, focused }) => {
          const [outline, filled] = tabIcons[
            route.name as keyof typeof tabIcons
          ] ?? ["help-circle-outline", "help-circle"];
          const iconName = focused ? filled : outline;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Главная" }} />
      <Tabs.Screen name="Events" options={{ title: "Мероприятия" }} />
    </Tabs>
  );
}
