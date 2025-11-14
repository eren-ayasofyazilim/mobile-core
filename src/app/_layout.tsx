import "../global.css";

import { SessionProvider } from "@/providers/SessionProvider";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
