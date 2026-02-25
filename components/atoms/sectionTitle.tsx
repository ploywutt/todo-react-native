import { TodoTheme } from "@/constants/theme";
import type { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export const SectionTitle = ({ children }: PropsWithChildren) => {
  return <Text style={styles.sectionTitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: TodoTheme.colors.textPrimary,
  },
});
