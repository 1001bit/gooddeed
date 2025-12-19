import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, type ComponentProps } from "react";
import {
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Switch,
  TextInput,
  View,
  type KeyboardTypeOptions,
  type ViewStyle,
} from "react-native";

import { ThemedText } from "@/components/custom-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";

type IconName = ComponentProps<typeof Ionicons>["name"];

type FormState = {
  text: string;
  holder: string;
  startAt: string;
  region: string;
  hours: string;
  people: string;
  description: string;
  past: boolean;
};

type FormFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  icon: IconName;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  containerStyle?: StyleProp<ViewStyle>;
};

export default function OrganizeScreen() {
  const [form, setForm] = useState<FormState>({
    text: "",
    holder: "",
    startAt: "",
    region: "",
    hours: "",
    people: "",
    description: "",
    past: false,
  });

  const surface = useThemeColor({}, "surface");
  const iconColor = useThemeColor({}, "icon");

  const updateField =
    <K extends keyof FormState>(key: K) =>
    (value: FormState[K]) =>
      setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <ThemedView
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <Stack.Screen
        options={{
          title: "Организовать",
        }}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerRow}>
          <Ionicons name="add-circle-outline" size={24} color={Colors.tint} />
          <View style={styles.headerText}>
            <ThemedText type="title" style={styles.heading}>
              Создать событие
            </ThemedText>
          </View>
        </View>
        <View style={styles.formSection}>
          <FormField
            label="Название"
            placeholder="Например, Посадка леса"
            value={form.text}
            onChangeText={updateField("text")}
            icon="leaf-outline"
            autoCapitalize="sentences"
          />

          <View style={styles.row}>
            <FormField
              label="Дата"
              placeholder="25.11.2025"
              value={form.startAt}
              onChangeText={updateField("startAt")}
              icon="calendar-outline"
              containerStyle={styles.flex}
            />
          </View>

          <FormField
            label="Длительность (часы)"
            placeholder="5"
            value={form.hours}
            onChangeText={updateField("hours")}
            icon="time-outline"
            keyboardType="numeric"
            containerStyle={styles.flex}
          />

          <FormField
            label="Локация"
            placeholder="Например, Минск"
            value={form.region}
            onChangeText={updateField("region")}
            icon="location-outline"
            autoCapitalize="words"
          />

          <FormField
            label="Количество участников"
            placeholder="20"
            value={form.people}
            onChangeText={updateField("people")}
            icon="people-outline"
            keyboardType="numeric"
          />

          <FormField
            label="Описание"
            placeholder="Что предстоит сделать и кому нужна помощь"
            value={form.description}
            onChangeText={updateField("description")}
            icon="chatbox-ellipses-outline"
            multiline
          />
        </View>

        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Оформление
        </ThemedText>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.uploadButton,
            {
              backgroundColor: surface,
              borderColor: Colors.tint,
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <Ionicons name="image-outline" size={18} color={Colors.tint} />
          <ThemedText style={styles.uploadText}>Загрузить картинку</ThemedText>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.submitButton,
            { opacity: pressed ? 0.9 : 1 },
          ]}
        >
          <Ionicons name="checkmark-circle-outline" size={18} color="#fff" />
          <ThemedText style={styles.submitText}>Создать событие</ThemedText>
        </Pressable>
      </ScrollView>
    </ThemedView>
  );
}

function FormField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  multiline,
  keyboardType,
  autoCapitalize,
  containerStyle,
}: FormFieldProps) {
  const surface = useThemeColor({}, "surface");
  const iconColor = useThemeColor({}, "icon");
  const textColor = useThemeColor({}, "text");

  return (
    <View style={[styles.field, containerStyle]}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: surface,
            borderColor: `${iconColor}33`,
          },
        ]}
      >
        <Ionicons name={icon} size={18} color={iconColor} />
        <TextInput
          style={[
            styles.input,
            multiline ? styles.inputMultiline : undefined,
            { color: textColor },
          ]}
          placeholder={placeholder}
          placeholderTextColor={`${iconColor}88`}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    gap: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerText: {
    flex: 1,
    gap: 4,
  },
  heading: {
    letterSpacing: -0.2,
  },
  subtext: {
    opacity: 0.75,
  },
  sectionTitle: {
    letterSpacing: -0.1,
  },
  formSection: {
    gap: 14,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  flex: {
    flex: 1,
  },
  field: {
    gap: 8,
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: -0.1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 4,
  },
  inputMultiline: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  uploadText: {
    color: Colors.tint,
    fontWeight: "700",
    fontSize: 16,
  },
  hint: {
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.75,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  statusTextWrap: {
    flex: 1,
    gap: 4,
  },
  submitButton: {
    marginTop: 4,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: Colors.tint,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  submitText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
