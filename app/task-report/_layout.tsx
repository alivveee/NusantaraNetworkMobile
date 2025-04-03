import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router/stack";

export default function _Layout() {
  const { type } = useLocalSearchParams<{ type: string }>();
  const title = type == "pengiriman" ? "Pengiriman" : "Kanvassing";
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: title }} />
      <Stack.Screen name="submit-report" options={{ title: title }} />
    </Stack>
  );
}
