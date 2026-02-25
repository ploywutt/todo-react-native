import { AddTaskTemplate } from "@/components/templates/addTaskTemplate";
import type { AddTaskInput, TaskItem } from "@/lib/types/todo";
import { loadTodos, saveTodos } from "@/storage/storage.todo";
import { router } from "expo-router";
import { Alert, Platform } from "react-native";

export default function AddTaskPage() {
  const handleAddTask = async (payload: AddTaskInput) => {
    const storedTodos = await loadTodos();

    const newTodo: TaskItem = {
      id: Date.now().toString(),
      title: payload.title,
      date: payload.date,
      time: payload.time,
      icon: payload.icon,
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

  return <AddTaskTemplate onAddTask={handleAddTask} />;
}
