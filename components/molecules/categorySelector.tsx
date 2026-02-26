import type { CategoryItem } from "@/lib/types/todo";
import { Pressable, StyleSheet, View } from "react-native";
import { IconBadge } from "../atoms";

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

type CategorySelectorProps = {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
};

export const CategorySelector = ({
  selectedCategory,
  onCategorySelect,
}: CategorySelectorProps) => {
  return (
    <View style={styles.categoryRow}>
      {CATEGORIES.map((category) => (
        <Pressable
          key={category.id}
          onPress={() => onCategorySelect(category.id)}
          hitSlop={6}
        >
          <IconBadge
            icon={category.icon}
            variant={selectedCategory === category.id ? "muted" : "default"}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryRow: {
    flexDirection: "row",
    gap: 12,
  },
});
