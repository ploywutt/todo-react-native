import { PrimaryButton } from "@/components/atoms";
import { Link } from "expo-router";
import type { ComponentProps } from "react";

type AddTaskButtonProps = Omit<
  ComponentProps<typeof PrimaryButton>,
  "label"
> & {
  label?: string;
  href?: ComponentProps<typeof Link>["href"];
};

export const AddTaskButton = ({
  label = "Add New Task",
  href = "/add-task",
  ...props
}: AddTaskButtonProps) => {
  return (
    <Link href={href} asChild>
      <PrimaryButton label={label} {...props} />
    </Link>
  );
};
