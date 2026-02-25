import { TodoTheme } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet } from "react-native";

type CheckBoxProps = {
  checked: boolean;
  onToggle?: () => void;
};

export const CheckBox = ({ checked, onToggle }: CheckBoxProps) => {
  return (
    <Pressable
      style={[styles.taskCheck, checked && styles.taskCheckFilled]}
      onPress={onToggle}
    >
      {checked ? (
        <MaterialCommunityIcons
          name="check"
          size={16}
          color={TodoTheme.colors.onPrimary}
        />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskCheck: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: TodoTheme.colors.primarySubtle,
    alignItems: "center",
    justifyContent: "center",
  },
  taskCheckFilled: {
    backgroundColor: TodoTheme.colors.secondary,
    borderColor: TodoTheme.colors.secondary,
  },
});
