import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

export const TASK_ICON_NAMES = [
  "book-open-variant",
  "calendar-blank",
  "trophy-outline",
] as const satisfies readonly IconName[];

export type TaskIconName = (typeof TASK_ICON_NAMES)[number];

export type TaskItem = {
  id: string;
  title: string;
  note: string | null;
  date: string | null;
  time: string | null;
  icon: TaskIconName;
  completed: boolean;
};

export type CategoryItem = {
  id: string;
  icon: TaskIconName;
};

export type AddTaskInput = {
  title: string;
  note: string | null;
  date: string | null;
  time: string | null;
  icon: TaskIconName;
};
