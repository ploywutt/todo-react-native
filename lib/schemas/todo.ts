import { TASK_ICON_NAMES } from "@/lib/types";
import { z } from "zod";

const nullableText = z
  .union([z.string(), z.null(), z.undefined()])
  .transform((value) => {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  });

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/;

const nullableDate = nullableText.refine(
  (value) => value === null || DATE_REGEX.test(value),
  {
    message: "Date must be YYYY-MM-DD.",
  },
);

const nullableTime = nullableText.refine(
  (value) => value === null || TIME_REGEX.test(value),
  {
    message: "Time must be HH:mm (24h).",
  },
);

export const addTaskInputSchema = z
  .object({
    title: z.string().trim().min(1, "Task title is required."),
    note: nullableText,
    date: nullableDate,
    time: nullableTime,
    icon: z.enum(TASK_ICON_NAMES),
  });

export const taskFromStorageSchema = z.object({
  id: z.string().min(1),
  title: z.string().trim().min(1),
  note: nullableText,
  date: nullableDate,
  time: nullableTime,
  icon: z.enum(TASK_ICON_NAMES).optional(),
  completed: z.boolean().optional(),
});
