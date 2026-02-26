import { PrimaryButton, Screen } from "@/components/atoms";
import { TodoTheme } from "@/constants/theme";
import type { TaskItem } from "@/lib/types";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBlock } from "../molecules";

type TodoDetailTemplateProps = {
  task?: TaskItem;
  onBack?: () => void;
};

export const TodoDetailTemplate = ({
  task,
  onBack,
}: TodoDetailTemplateProps) => {
  return (
    <Screen>
      <StatusBar style="light" backgroundColor={TodoTheme.colors.primary} />
      <HeaderBlock title={task ? task.title : "Todo"} isDate={false} />

      <View style={styles.body}>
        {task ? (
          <View style={styles.card}>
            <Text style={styles.noteText}>{task.note ?? "-"}</Text>
            <Text style={styles.descText}>Date: {task.date ?? "-"}</Text>
            <Text style={styles.descText}>Time: {task.time ?? "-"}</Text>
            <Text style={styles.descText}>
              Status: {task.completed ? "Completed" : "Active"}
            </Text>
          </View>
        ) : (
          <Text style={styles.emptyText}>Task not found.</Text>
        )}
        <PrimaryButton label="Back" onPress={onBack} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  emptyText: {
    color: TodoTheme.colors.textSecondary,
    fontSize: 16,
  },
  card: {
    backgroundColor: TodoTheme.colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: TodoTheme.colors.border,
    padding: 16,
    gap: 16,
  },
  noteText: {
    color: TodoTheme.colors.textSecondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  descText: {
    color: TodoTheme.colors.textMuted,
    fontSize: 15,
  },
});
