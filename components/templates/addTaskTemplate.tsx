import { Screen } from "@/components/atoms";
import { AddTaskHeader } from "@/components/molecules";
import { AddTaskForm } from "@/components/organisms";
import type { AddTaskInput } from "@/lib/types/todo";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

type AddTaskTemplateProps = {
  onAddTask: (payload: AddTaskInput) => void;
  onClose?: () => void;
};

export const AddTaskTemplate = ({
  onAddTask,
  onClose,
}: AddTaskTemplateProps) => {
  return (
    <Screen>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <AddTaskHeader title="Add New Task" onClose={onClose} />
        <AddTaskForm onAddTask={onAddTask} />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
});
