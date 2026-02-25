import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";
import { IconBadge } from "../atoms";

export type CategoryItem = {
  id: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: "study",
    icon: "book-open-variant",
  },
  {
    id: "calendar",
    icon: "calendar-blank",
  },
  {
    id: "trophy",
    icon: "trophy-outline",
  },
];

export const CategorySelector = () => {
  return (
    <View style={styles.categoryRow}>
      {CATEGORIES.map((category) => (
        <IconBadge key={category.id} icon={category.icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryRow: {
    flexDirection: "row",
    gap: 12,
  },
  categoryItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
