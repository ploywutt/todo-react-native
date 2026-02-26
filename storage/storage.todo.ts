import type { TaskItem } from "@/lib/types/todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "TODOS_V1";
const DEFAULT_ICON: TaskItem["icon"] = "book-open-variant";

const normalizeTask = (raw: unknown): TaskItem | null => {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const value = raw as Partial<TaskItem>;
  if (typeof value.id !== "string" || typeof value.title !== "string") {
    return null;
  }

  const completed =
    typeof value.completed === "boolean" ? value.completed : false;
  const note = typeof value.note === "string" ? value.note : null;
  const date = typeof value.date === "string" ? value.date : null;
  const time = typeof value.time === "string" ? value.time : null;
  const icon = typeof value.icon === "string" ? value.icon : DEFAULT_ICON;

  return {
    id: value.id,
    title: value.title,
    note,
    completed,
    date,
    time,
    icon,
  };
};

export const loadTodos = async (): Promise<TaskItem[]> => {
  try {
    const json = await AsyncStorage.getItem(KEY);
    if (!json) {
      return [];
    }

    const parsed = JSON.parse(json) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map(normalizeTask)
      .filter((task): task is TaskItem => task !== null);
  } catch (error) {
    if (__DEV__) {
      console.warn("Failed to load todos from storage:", error);
    }
    return [];
  }
};

export const saveTodos = async (todos: TaskItem[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(todos));
  } catch (error) {
    if (__DEV__) {
      console.warn("Failed to save todos to storage:", error);
    }
  }
};
