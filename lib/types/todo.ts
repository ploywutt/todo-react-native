import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

export type TaskItem = {
  id: string;
  title: string;
  note: string | null;
  date: string | null;
  time: string | null;
  icon: IconName;
  completed: boolean;
};

export type CategoryItem = {
  id: string;
  icon: IconName;
};

export type AddTaskInput = {
  title: string;
  note: string | null;
  date: string | null;
  time: string | null;
  icon: IconName;
};
