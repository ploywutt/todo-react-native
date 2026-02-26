import { TodoTheme } from "@/constants/theme";
import { type ComponentProps } from "react";
import { StyleSheet, TextInput } from "react-native";

type TextInputFieldProps = ComponentProps<typeof TextInput> & {
  hasError?: boolean;
};

export const TextInputField = ({
  hasError,
  style,
  ...props
}: TextInputFieldProps) => {
  return (
    <TextInput
      placeholderTextColor={TodoTheme.colors.textPlaceholder}
      style={[styles.input, hasError ? styles.inputError : null, style]}
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
  inputError: {
    borderColor: TodoTheme.colors.danger,
  },
});
