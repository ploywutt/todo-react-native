import { Screen, SectionTitle } from "@/components/atoms";
import { AddTaskButton, HeaderBlock } from "@/components/molecules";
import { TaskCard } from "@/components/organisms";
import type { TaskItem } from "@/lib/data/todo";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

type TodoTemplateProps = {
  tasks: TaskItem[];
};

export const TodoTemplate = ({ tasks }: TodoTemplateProps) => {
  const [taskList, setTaskList] = useState(tasks);

  const activeTasks = useMemo(
    () => taskList.filter((task) => !task.completed),
    [taskList],
  );
  const completedTasks = useMemo(
    () => taskList.filter((task) => task.completed),
    [taskList],
  );

  const handleToggleTask = (taskId: string) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <Screen>
      <StatusBar style="light" />
      <HeaderBlock title="Todo Today !" dateText="October 20, 2022" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TaskCard tasks={activeTasks} onToggleTask={handleToggleTask} />
        <SectionTitle>Completed</SectionTitle>
        <TaskCard tasks={completedTasks} onToggleTask={handleToggleTask} />
        <AddTaskButton />
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
