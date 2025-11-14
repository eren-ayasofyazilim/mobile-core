import "../global.css";
import { SplashScreenController } from "@/feats/SplashScreenController";
import { SessionProvider, useSession } from "@/providers/SessionProvider";
import { Stack } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <StatusBar translucent={true} />
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <SessionProvider>
            <SplashScreenController />
            <RootNavigator />
          </SessionProvider>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(auth)/index" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="(public)/login" />
      </Stack.Protected>
    </Stack>
  );
}
