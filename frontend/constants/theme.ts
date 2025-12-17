/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform, StyleSheet } from "react-native";

// Brand accent (works as button/badge background with light text).

export const Colors = {
  tint: "#15803D",
  light: {
    text: "#0F172A",
    surface: "#ececf0",
    background: "#FFFFFF",
    icon: "#64748B",
    tabIconSelected: "#15803D",
    tabIconDefault: "#64748B",
  },
  dark: {
    text: "#F8FAFC",
    surface: "#0b0b0b",
    background: "#1a1a1a",
    icon: "#94A3B8",
    tabIconSelected: "#15803D",
    tabIconDefault: "#94A3B8",
  },
};

export const Styles = StyleSheet.create({
  elevated: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  glowing: {
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 5,
        spreadDistance: 2,
        color: "rgba(255,255,255,0.05)",
        inset: true,
      },
    ],
  },
});

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
