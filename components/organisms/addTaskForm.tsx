import { FieldLabel, PrimaryButton, TextInputField } from "@/components/atoms";
import {
  CATEGORIES,
  CategorySelector,
  InputWithIcon,
} from "@/components/molecules";
import { TodoTheme } from "@/constants/theme";
import type { AddTaskInput } from "@/lib/types/todo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker, {
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

type AddTaskProps = {
  onAddTask: (payload: AddTaskInput) => void;
};

const formatDate = (value: Date) => {
  const year = value.getFullYear();
  const month = `${value.getMonth() + 1}`.padStart(2, "0");
  const day = `${value.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatTime = (value: Date) => {
  return value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const AddTaskForm = ({ onAddTask }: AddTaskProps) => {
  const [selectedCategory, setSelectedCategory] = useState("study");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [titleError, setTitleError] = useState("");
  const [dateText, setDateText] = useState("");
  const [timeText, setTimeText] = useState("");
  const [datePickerValue, setDatePickerValue] = useState(new Date());
  const [timePickerValue, setTimePickerValue] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (_event: DateTimePickerEvent, selected?: Date) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (selected) {
      setDatePickerValue(selected);
      setDateText(formatDate(selected));
    }
  };

  const handleTimeChange = (_event: DateTimePickerEvent, selected?: Date) => {
    if (Platform.OS === "android") {
      setShowTimePicker(false);
    }
    if (selected) {
      setTimePickerValue(selected);
      setTimeText(formatTime(selected));
    }
  };

  const handleAddTask = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setTitleError("Task title is required.");
      return;
    }
    setTitleError("");

    const selected = CATEGORIES.find(
      (category) => category.id === selectedCategory,
    );
    const icon = selected?.icon ?? "book-open-variant";
    const trimmedDate = dateText.trim();
    const trimmedTime = timeText.trim();
    const trimmedNote = note.trim();

    onAddTask({
      title: trimmedTitle,
      note: trimmedNote || null,
      date: trimmedDate || null,
      time: trimmedTime || null,
      icon,
    });
  };

  return (
    <>
      <FieldLabel>Task Title</FieldLabel>
      <TextInputField
        placeholder="Task Title"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          if (titleError) {
            setTitleError("");
          }
        }}
        hasError={Boolean(titleError)}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}
      <FieldLabel>Category</FieldLabel>
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <FieldLabel>Date</FieldLabel>
      {Platform.OS === "web" ? (
        <InputWithIcon
          placeholder="Date"
          icon="calendar-blank"
          value={dateText}
          onChangeText={setDateText}
        />
      ) : (
        <>
          <Pressable
            style={styles.pickerField}
            onPress={() => setShowDatePicker(true)}
          >
            <Text
              style={[styles.pickerText, !dateText && styles.placeholderText]}
            >
              {dateText || "Date"}
            </Text>
            <MaterialCommunityIcons
              name="calendar-blank"
              size={18}
              color={TodoTheme.colors.secondary}
            />
          </Pressable>
          {showDatePicker ? (
            <DateTimePicker
              value={datePickerValue}
              mode="date"
              onChange={handleDateChange}
            />
          ) : null}
        </>
      )}

      <FieldLabel>Time</FieldLabel>
      {Platform.OS === "web" ? (
        <InputWithIcon
          placeholder="Time"
          icon="clock-outline"
          value={timeText}
          onChangeText={setTimeText}
        />
      ) : (
        <>
          <Pressable
            style={styles.pickerField}
            onPress={() => setShowTimePicker(true)}
          >
            <Text
              style={[styles.pickerText, !timeText && styles.placeholderText]}
            >
              {timeText || "Time"}
            </Text>
            <MaterialCommunityIcons
              name="clock-outline"
              size={18}
              color={TodoTheme.colors.secondary}
            />
          </Pressable>
          {showTimePicker ? (
            <DateTimePicker
              value={timePickerValue}
              mode="time"
              onChange={handleTimeChange}
            />
          ) : null}
        </>
      )}

      <FieldLabel>Notes</FieldLabel>
      <TextInputField
        placeholder="Notes"
        multiline
        style={styles.textArea}
        value={note}
        onChangeText={setNote}
      />

      <PrimaryButton
        label="Save"
        style={styles.saveButton}
        onPress={handleAddTask}
      />
    </>
  );
};

const styles = StyleSheet.create({
  pickerField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: TodoTheme.colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: TodoTheme.colors.border,
  },
  pickerText: {
    color: TodoTheme.colors.textPrimary,
    fontSize: 14,
  },
  placeholderText: {
    color: TodoTheme.colors.textPlaceholder,
  },
  errorText: {
    color: TodoTheme.colors.danger,
    fontSize: 12,
    marginTop: -8,
  },
  textArea: {
    height: 140,
    borderRadius: 16,
    textAlignVertical: "top",
  },
  saveButton: {
    marginTop: 12,
  },
});
