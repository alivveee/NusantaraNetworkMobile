import { Stack } from "expo-router/stack";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="task-report" options={{ headerShown: false }} />
    </Stack>
  );
}
