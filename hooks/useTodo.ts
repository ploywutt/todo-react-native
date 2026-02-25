import { TASKS } from "@/lib/data/todo";
import type { TaskItem } from "@/lib/types/todo";
import { loadTodos, saveTodos } from "@/storage/storage.todo";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState(true);

  const hydrate = useCallback(async () => {
    const data = await loadTodos();
    if (data.length === 0) {
      setTodos(TASKS);
    } else {
      setTodos(data);
    }
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      hydrate();
      return undefined;
    }, [hydrate]),
  );

  useEffect(() => {
    if (!loading) {
      saveTodos(todos);
    }
  }, [todos, loading]);

  const add = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const newTodo: TaskItem = {
      id: Date.now().toString(),
      title: trimmed,
      date: null,
      time: null,
      icon: "book-open-variant",
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggle = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const remove = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return { todos, add, toggle, remove, loading };
};
