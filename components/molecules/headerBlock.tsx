import { TodoTheme } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type HeaderBlockProps = {
  title: string;
};

export const HeaderBlock = ({ title }: HeaderBlockProps) => {
  const date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <View style={styles.header}>
      <Text style={styles.headerDate}>{date}</Text>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: TodoTheme.colors.primary,
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: "hidden",
    gap: 12,
  },
  headerTitle: {
    marginTop: 0,
    color: TodoTheme.colors.onPrimary,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  headerDate: {
    color: TodoTheme.colors.primarySubtle,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
