import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Fonts } from "@/constants/theme";

export type StyledTextProps = TextProps & {
  type?:
    | "default"
    | "defaultLarge"
    | "title"
    | "subtitle"
    | "link"
    | "profileName"
    | "profileRole"
    | "profileStatValue"
    | "profileStatLabel";
};

export type ThemedTextProps = StyledTextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function StyledText({
  style,
  type = "default",
  ...rest
}: StyledTextProps) {
  return (
    <Text
      style={[
        styles.base,
        type === "defaultLarge" ? styles.defaultLarge : undefined,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "profileName" ? styles.profileName : undefined,
        type === "profileRole" ? styles.profileRole : undefined,
        type === "profileStatValue" ? styles.profileStatValue : undefined,
        type === "profileStatLabel" ? styles.profileStatLabel : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

export function ThemedText({
  lightColor,
  darkColor,
  style,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <StyledText style={[{ color }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  base: {
    fontFamily: Fonts.rounded,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  defaultLarge: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    letterSpacing: -0.1,
  },
  profileName: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "700",
    letterSpacing: -0.2,
  },
  profileRole: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    opacity: 0.9,
  },
  profileStatValue: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "700",
    letterSpacing: -0.1,
  },
  profileStatLabel: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "500",
    opacity: 0.9,
    letterSpacing: 0.2,
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: "#0a7ea4",
  },
});
