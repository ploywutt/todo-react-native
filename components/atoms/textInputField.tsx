import { TodoTheme } from "@/constants/theme";
import type { ComponentProps } from "react";
import { StyleSheet, TextInput } from "react-native";

type TextInputFieldProps = ComponentProps<typeof TextInput>;

export const TextInputField = ({ style, ...props }: TextInputFieldProps) => {
  return (
    <TextInput
      placeholderTextColor={TodoTheme.colors.textDisabled}
      style={[styles.input, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: TodoTheme.colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: TodoTheme.colors.border,
    fontSize: 14,
    color: TodoTheme.colors.textPrimary,
  },
});
