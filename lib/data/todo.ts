import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";

export type TaskItem = {
  id: string;
  title: string;
  time: string | null;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  completed: boolean;
};

export const TASKS: TaskItem[] = [
  {
    id: "1",
    title: "Study lesson",
    time: null,
    icon: "book-open-variant",
    completed: false,
  },
  {
    id: "2",
    title: "Run 5k",
    time: "4:00pm",
    icon: "trophy-outline",
    completed: false,
  },
  {
    id: "3",
    title: "Go to party",
    time: "10:00pm",
    icon: "calendar-blank",
    completed: false,
  },
  {
    id: "4",
    title: "Game meetup",
    time: "1:00pm",
    icon: "calendar-blank",
    completed: true,
  },
  {
    id: "5",
    title: "Take out trash",
    time: null,
    icon: "book-open-variant",
    completed: true,
  },
];
