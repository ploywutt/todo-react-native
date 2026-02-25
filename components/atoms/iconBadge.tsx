import { TodoTheme } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

type IconBadgeProps = {
  icon: IconName;
  variant?: "default" | "muted";
};

export const IconBadge = ({ icon, variant = "default" }: IconBadgeProps) => {
  const isMuted = variant === "muted";

  return (
    <View style={[styles.taskIcon, isMuted && styles.taskIconMuted]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={isMuted ? TodoTheme.colors.secondary : TodoTheme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: TodoTheme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  taskIconMuted: {
    backgroundColor: TodoTheme.colors.primaryMuted,
  },
});
