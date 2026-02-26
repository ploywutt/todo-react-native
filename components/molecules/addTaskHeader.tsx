import { TodoTheme } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AddTaskHeaderProps = {
  title: string;
  onClose?: () => void;
};

export const AddTaskHeader = ({ title, onClose }: AddTaskHeaderProps) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <MaterialCommunityIcons
          name="close"
          size={20}
          color={TodoTheme.colors.secondary}
        />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  closeButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: TodoTheme.colors.surface,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: TodoTheme.colors.primary,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TodoTheme.colors.textPrimary,
  },
  headerSpacer: {
    width: 42,
    height: 42,
  },
});
