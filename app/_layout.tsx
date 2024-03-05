// @ts-ignore
import { BalanceProvider } from "@/Redux/BalanceContext";
import { CompanyProvider} from "@/Redux/NameContext";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NativeRouter } from "react-router-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-l": require("../assets/fonts/Montserrat-Light.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <NativeRouter>
      <BalanceProvider>
        <CompanyProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(modals)/CommercialProperties"
              options={{
                headerShown: true,
                headerTitle: "Commercial Properties",
              }}
            />
            <Stack.Screen
              name="(modals)/PersonalProperties"
              options={{
                headerShown: true,
                headerTitle: "Personal Properties",
              }}
            />
          </Stack>
        </CompanyProvider>
      </BalanceProvider>
    </NativeRouter>
  );
}
