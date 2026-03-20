import '@/global.css'
import { PortalHost } from '@rn-primitives/portal'
import { Stack } from "expo-router";
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <>
      <StatusBar
        style={colorScheme === 'dark' ? 'light' : 'dark'}
        animated
      />
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name='index' />
      </Stack>
      <PortalHost />
    </>
  );
}
