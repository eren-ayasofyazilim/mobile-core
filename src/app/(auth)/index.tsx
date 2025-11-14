import { useSession } from "@/providers/SessionProvider";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}

function Content() {
  const { session } = useSession();

  return (
    <View className="flex-1">
      <Text
        role="heading"
        className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Welcome to Project ACME {session ? `(Session: ${session})` : ""}
      </Text>
    </View>
  );
}
