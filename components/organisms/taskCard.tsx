import { TaskRow } from "@/components/molecules";
import { TodoTheme } from "@/constants/theme";
import type { TaskItem } from "@/lib/data/todo";
import { StyleSheet, View } from "react-native";

type TaskCardProps = {
  tasks: TaskItem[];
  onToggleTask?: (taskId: string) => void;
};

export const TaskCard = ({ tasks, onToggleTask }: TaskCardProps) => {
  return (
    <View style={styles.card}>
      {tasks.map((task, index) => {
        return (
          <TaskRow
            key={task.id}
            task={task}
            isCompleted={task.completed}
            isLast={index === tasks.length - 1}
            onToggle={() => onToggleTask?.(task.id)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: TodoTheme.colors.surface,
    borderRadius: 20,
    paddingVertical: 4,
    shadowColor: TodoTheme.colors.primary,
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
});
