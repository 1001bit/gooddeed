import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";

interface BadgeProps {
  children: React.ReactNode;
  type: "primary" | "secondary";
}

export default function Badge(props: BadgeProps) {
  return (
    <View style={[styles.badge, styles[props.type]]}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 1000,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    paddingBlock: 2,
    paddingInline: 10,
    borderColor: Colors.dark["tint"],
    borderWidth: 3,
  },

  primary: {
    backgroundColor: Colors.dark["tint"],
  },

  secondary: {},
});
