import { Stack } from "expo-router";

// Root layout for Expo Router
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true }} />
      <Stack.Screen name="signup" options={{ headerShown: true }} />
      <Stack.Screen name="home" options={{ headerShown: true }} />
    </Stack>
  );
}
