import DashboardHeader from "@components/headers/appHeader/appHeader";
import { Stack } from "expo-router";

export default function DashboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Back",
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          header: (props) => <DashboardHeader {...props} />,
        }}
      />
      {/* Screens in which bottom tab should not be visible should be listed below */}
      <Stack.Screen name="feed/[id]" />
      <Stack.Screen name="notification/index" />
    </Stack>
  );
}
