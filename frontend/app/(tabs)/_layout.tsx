import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function TabLayout() {
  const tabIcons = {
    index: ['home-outline', 'home'] as const,
    Profile: ['person-outline', 'person'] as const,
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: useThemeColor({}, "tabIconSelected"),
        tabBarInactiveTintColor: useThemeColor({}, "tabIconDefault"),
        tabBarStyle: { backgroundColor: useThemeColor({}, "background") },
        tabBarIcon: ({ color, size, focused }) => {
          const [outline, filled] =
            tabIcons[route.name as keyof typeof tabIcons] ?? ['help-circle-outline', 'help-circle'];
          const iconName = focused ? filled : outline;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="Profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
