import { Screen } from "@/components/atoms";
import { AddTaskHeader } from "@/components/molecules";
import { AddTaskForm } from "@/components/organisms";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export const AddTaskTemplate = () => {
  return (
    <Screen>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <AddTaskHeader title="Add New Task" />
        <AddTaskForm />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
});
