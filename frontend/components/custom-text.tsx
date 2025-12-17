import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type StyledTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "defaultLarge";
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
          type === "defaultLarge" ? styles.defaultLarge : undefined,
          type === "default" ? styles.default : undefined,
          type === "title" ? styles.title : undefined,
          type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
          type === "subtitle" ? styles.subtitle : undefined,
          type === "link" ? styles.link : undefined,
          style
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
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  defaultLarge: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
