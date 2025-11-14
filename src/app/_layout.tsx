import "../global.css";
import { SplashScreenController } from "@/feats/SplashScreenController";
import { SessionProvider, useSession } from "@/providers/SessionProvider";
import { Stack } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView // style={styles.container}
    >
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
    <Stack>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(auth)/index" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="login" />
      </Stack.Protected>
    </Stack>
  );
}
