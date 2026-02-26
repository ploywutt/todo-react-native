import { AddTaskTemplate } from "@/components/templates/addTaskTemplate";
import { addTaskInputSchema } from "@/lib/schemas/todo";
import type { AddTaskInput, TaskItem } from "@/lib/types/todo";
import { loadTodos, saveTodos } from "@/storage/storage.todo";
import { router } from "expo-router";
import { Alert, Platform } from "react-native";

export default function AddTaskPage() {
  const handleClose = () => {
    router.back();
  };

  const handleAddTask = async (payload: AddTaskInput) => {
    const validation = addTaskInputSchema.safeParse(payload);
    if (!validation.success) {
      Alert.alert("Invalid task", "Please check your task details.");
      return;
    }

    const storedTodos = await loadTodos();
    const input = validation.data;

    const newTodo: TaskItem = {
      id: Date.now().toString(),
      title: input.title,
      note: input.note,
      date: input.date,
      time: input.time,
      icon: input.icon,
      completed: false,
    };

    await saveTodos([newTodo, ...storedTodos]);

    if (Platform.OS === "web") {
      globalThis.alert?.("Task has been submitted.");
    } else {
      Alert.alert("Saved", "Task has been submitted.");
    }

    router.back();
  };

  return <AddTaskTemplate onAddTask={handleAddTask} onClose={handleClose} />;
}
