import { TodoDetailTemplate } from "@/components/templates/todoDetail";
import { TASKS } from "@/lib/data/todo";
import type { TaskItem } from "@/lib/types/todo";
import { loadTodos } from "@/storage/storage.todo";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function TaskDetailPage() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [todos, setTodos] = useState<TaskItem[]>([]);

  useEffect(() => {
    const hydrate = async () => {
      const stored = await loadTodos();
      setTodos(stored.length > 0 ? stored : TASKS);
    };

    hydrate();
  }, []);

  const task = useMemo(() => todos.find((item) => item.id === id), [todos, id]);
  const handleBack = useCallback(() => {
    router.back();
  }, []);

  return <TodoDetailTemplate task={task} onBack={handleBack} />;
}
