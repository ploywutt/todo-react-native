import { TodoTemplate } from "@/components/templates/todoTemplate";
import { useTodos } from "@/hooks/useTodo";
import { router } from "expo-router";
import { useCallback, useMemo } from "react";

export default function Page() {
  const { todos, toggle } = useTodos();

  const activeTasks = useMemo(
    () => todos.filter((task) => !task.completed),
    [todos],
  );
  const completedTasks = useMemo(
    () => todos.filter((task) => task.completed),
    [todos],
  );

  const handleAddTask = useCallback(() => {
    router.push("/add-task");
  }, []);

  const handleOpenTask = useCallback((taskId: string) => {
    router.push(`/task/${taskId}`);
  }, []);

  return (
    <TodoTemplate
      activeTasks={activeTasks}
      completedTasks={completedTasks}
      onToggleTask={toggle}
      onAddTask={handleAddTask}
      onOpenTask={handleOpenTask}
    />
  );
}
