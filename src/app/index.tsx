import { Redirect } from "expo-router";

export default function AppRoot() {
  return <Redirect href="/(authenticated)/(dashboard)/(tabs)/feed/" />;
}
