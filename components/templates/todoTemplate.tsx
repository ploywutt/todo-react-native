import { PrimaryButton, Screen, SectionTitle } from "@/components/atoms";
import { HeaderBlock } from "@/components/molecules";
import { TaskCard } from "@/components/organisms";
import { TodoTheme } from "@/constants/theme";
import type { TaskItem } from "@/lib/types/todo";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

type TodoTemplateProps = {
  activeTasks: TaskItem[];
  completedTasks: TaskItem[];
  onToggleTask?: (taskId: string) => void;
  onAddTask?: () => void;
  onOpenTask?: (taskId: string) => void;
};

export const TodoTemplate = ({
  activeTasks,
  completedTasks,
  onToggleTask,
  onAddTask,
  onOpenTask,
}: TodoTemplateProps) => {
  return (
    <Screen>
      <StatusBar style="light" backgroundColor={TodoTheme.colors.primary} />
      <HeaderBlock title="Let's finish the jobs" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TaskCard
          tasks={activeTasks}
          onToggleTask={onToggleTask}
          onOpenTask={onOpenTask}
        />
        <SectionTitle>Completed</SectionTitle>
        <TaskCard
          tasks={completedTasks}
          onToggleTask={onToggleTask}
          onOpenTask={onOpenTask}
        />
        <PrimaryButton label="Add Task" onPress={onAddTask} />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 24,
    gap: 20,
  },
});
