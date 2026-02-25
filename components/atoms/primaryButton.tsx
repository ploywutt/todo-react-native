import { TodoTheme } from "@/constants/theme";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type PrimaryButtonProps = Omit<ComponentProps<typeof Pressable>, "children"> & {
  label: string;
};

export const PrimaryButton = ({
  label,
  style,
  ...props
}: PrimaryButtonProps) => {
  const composedStyle: ComponentProps<typeof Pressable>["style"] =
    typeof style === "function"
      ? (state) => [styles.button, style(state)]
      : [styles.button, style];

  return (
    <Pressable style={composedStyle} {...props}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: TodoTheme.colors.primary,
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: "center",
    marginTop: 8,
    shadowColor: TodoTheme.colors.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },
  text: {
    color: TodoTheme.colors.onPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
});
