import { TextInputField } from "@/components/atoms";
import { TodoTheme } from "@/constants/theme";
import type { IconName } from "@/lib/types/todo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";

type InputWithIconProps = {
  icon: IconName;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export const InputWithIcon = ({
  icon,
  placeholder,
  value,
  onChangeText,
}: InputWithIconProps) => {
  return (
    <View style={styles.inputWithIcon}>
      <TextInputField
        placeholder={placeholder}
        style={styles.inputFlex}
        value={value}
        onChangeText={onChangeText}
      />
      <MaterialCommunityIcons
        name={icon}
        size={18}
        color={TodoTheme.colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: TodoTheme.colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: TodoTheme.colors.border,
  },
  inputFlex: {
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
