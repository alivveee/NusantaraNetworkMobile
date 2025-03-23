import { Stack } from "expo-router/stack";

export default function _Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pengiriman" }} />
      <Stack.Screen name="submit-report" options={{ title: "Pengiriman" }} />
    </Stack>
  );
}
