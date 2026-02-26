import { taskFromStorageSchema } from "@/lib/schemas/todo";
import type { TaskItem } from "@/lib/types/todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "TODOS_V1";
const DEFAULT_ICON: TaskItem["icon"] = "book-open-variant";

const normalizeTask = (raw: unknown): TaskItem | null => {
  const parsed = taskFromStorageSchema.safeParse(raw);
  if (!parsed.success) {
    return null;
  }

  const value = parsed.data;

  return {
    id: value.id,
    title: value.title,
    note: value.note,
    completed: value.completed ?? false,
    date: value.date,
    time: value.time,
    icon: value.icon ?? DEFAULT_ICON,
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
