import { FieldLabel, PrimaryButton, TextInputField } from "@/components/atoms";
import { CategorySelector, InputWithIcon } from "@/components/molecules";
import { StyleSheet } from "react-native";

export const AddTaskForm = () => {
  return (
    <>
      <FieldLabel>Task Title</FieldLabel>
      <TextInputField placeholder="Task Title" />

      <FieldLabel>Category</FieldLabel>
      <CategorySelector />

      <FieldLabel>Date</FieldLabel>
      <InputWithIcon placeholder="Date" icon="calendar-blank" />

      <FieldLabel>Time</FieldLabel>
      <InputWithIcon placeholder="Time" icon="clock-outline" />

      <FieldLabel>Notes</FieldLabel>
      <TextInputField placeholder="Notes" multiline style={styles.textArea} />

      <PrimaryButton label="Save" style={styles.saveButton} />
    </>
  );
};

const styles = StyleSheet.create({
  textArea: {
    height: 140,
    borderRadius: 16,
    textAlignVertical: "top",
  },
  saveButton: {
    marginTop: 12,
  },
});
