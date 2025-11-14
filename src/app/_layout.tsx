import { SplashScreenController } from "@/feats/SplashScreenController";
import "../global.css";

import { SessionProvider, useSession } from "@/providers/SessionProvider";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
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
