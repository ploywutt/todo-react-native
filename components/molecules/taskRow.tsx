import { IconBadge } from "@/components/atoms/iconBadge";
import { TodoTheme } from "@/constants/theme";
import type { TaskItem } from "@/lib/data/todo";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "../atoms";

type TaskRowProps = {
  task: TaskItem;
  isCompleted: boolean;
  isLast: boolean;
  onToggle?: () => void;
};

export const TaskRow = ({
  task,
  isCompleted,
  isLast,
  onToggle,
}: TaskRowProps) => {
  const variant = isCompleted ? "muted" : "default";

  return (
    <View style={[styles.taskRow, isLast ? styles.taskRowLast : null]}>
      <IconBadge variant={variant} icon={task.icon} />
      <View style={styles.taskText}>
        <Text style={[styles.taskTitle, isCompleted && styles.taskTitleMuted]}>
          {task.title}
        </Text>
        {task.time ? (
          <Text style={[styles.taskTime, isCompleted && styles.taskTimeMuted]}>
            {task.time}
          </Text>
        ) : null}
      </View>
      <CheckBox checked={isCompleted} onToggle={onToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: TodoTheme.colors.primarySoft,
  },
  taskRowLast: {
    borderBottomWidth: 0,
  },
  taskText: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: TodoTheme.colors.textPrimary,
  },
  taskTitleMuted: {
    color: TodoTheme.colors.textDisabled,
    textDecorationLine: "line-through",
  },
  taskTime: {
    marginTop: 4,
    color: TodoTheme.colors.textMuted,
    fontSize: 13,
  },
  taskTimeMuted: {
    color: TodoTheme.colors.textMuted,
  },
});
