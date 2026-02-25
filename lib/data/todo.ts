import type { TaskItem } from "@/lib/types/todo";

export const TASKS: TaskItem[] = [
  {
    id: "1",
    title: "Study lesson",
    date: null,
    time: null,
    icon: "book-open-variant",
    completed: false,
  },
  {
    id: "2",
    title: "Run 5k",
    date: null,
    time: "4:00pm",
    icon: "trophy-outline",
    completed: false,
  },
  {
    id: "3",
    title: "Go to party",
    date: null,
    time: "10:00pm",
    icon: "calendar-blank",
    completed: false,
  },
  {
    id: "4",
    title: "Game meetup",
    date: null,
    time: "1:00pm",
    icon: "calendar-blank",
    completed: true,
  },
  {
    id: "5",
    title: "Take out trash",
    date: null,
    time: null,
    icon: "book-open-variant",
    completed: true,
  },
];
