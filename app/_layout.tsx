import "@/global.css";
import { TimerProvider } from "@/lib/TimerContext";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <TimerProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} animated />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <PortalHost />
    </TimerProvider>
  );
}
