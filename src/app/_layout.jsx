import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // statusBarStyle: 'dark',
        statusBarStyle: 'light',
        statusBarColor: '#161622',
        headerShown: false
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  )
}
