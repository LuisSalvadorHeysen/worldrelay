import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { RegisterTripContext } from '@/context/RegisterTripContext';
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    'outfit': require('@/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('@/assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('@/assets/fonts/Outfit-Bold.ttf')
  })

  const [tripData, setTripData] = useState([]);

  return (
    <RegisterTripContext.Provider value={{tripData, setTripData}}>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='(tabs)' />
      </Stack>
    </RegisterTripContext.Provider>
  );
}
