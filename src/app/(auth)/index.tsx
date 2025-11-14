import { useSession } from "@/providers/SessionProvider";
import { StatusBar } from "expo-status-bar";
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
      <Text className="font-bold text-4xl">
        Welcome {session ? `(Session: ${session})` : ""}
      </Text>
    </View>
  );
}
