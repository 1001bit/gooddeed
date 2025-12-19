import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useThemeColor } from "@/hooks/use-theme-color";
import { getProfileMock } from "@/mock/profile";

export default function TabLayout() {
  const tabIcons = {
    index: ["home-outline", "home"] as const,
    Events: ["calendar-outline", "calendar"] as const,
    Organize: ["add-circle-outline", "add-circle"] as const,
  };

  const tabBarActiveTintColor = useThemeColor({}, "tabIconSelected");
  const tabBarInactiveTintColor = useThemeColor({}, "tabIconDefault");
  const tabBarBackgroundColor = useThemeColor({}, "surface");
  const screens = [
    { name: "index", options: { title: "Главная" } },
    { name: "Events", options: { title: "Мероприятия" } },
  ];

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
      {screens.map(({ name, options }) => (
        <Tabs.Screen key={name} name={name} options={options} />
      ))}
    </Tabs>
  );
}
