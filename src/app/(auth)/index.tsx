import { useSession } from "@/providers/SessionProvider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-[#db0000]">
      <Content />
    </SafeAreaView>
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
