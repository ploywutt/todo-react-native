import { TodoTheme } from "@/constants/theme";
import type { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export const FieldLabel = ({ children }: PropsWithChildren) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: TodoTheme.colors.textPrimary,
  },
});
