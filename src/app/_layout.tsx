import { SplashScreenController } from "@/feats/SplashScreenController";
import { SessionProvider, useSession } from "@/providers/SessionProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <StatusBar translucent={true} />
      <BottomSheetModalProvider>
        <SessionProvider>
          <SplashScreenController />
          <RootNavigator />
        </SessionProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="(public)/onboarding" />
      </Stack.Protected>
    </Stack>
  );
}
