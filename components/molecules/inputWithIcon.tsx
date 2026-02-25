import { TextInputField } from "@/components/atoms";
import { TodoTheme } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

type InputWithIconProps = {
  icon: IconName;
  placeholder: string;
};

export const InputWithIcon = ({ icon, placeholder }: InputWithIconProps) => {
  return (
    <View style={styles.inputWithIcon}>
      <TextInputField placeholder={placeholder} style={styles.inputFlex} />
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
