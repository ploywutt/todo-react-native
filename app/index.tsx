import { TodoTemplate } from "@/components/templates/todoTemplate";
import { TASKS } from "@/lib/data/todo";

export default function Page() {
  return <TodoTemplate tasks={TASKS} />;
}
