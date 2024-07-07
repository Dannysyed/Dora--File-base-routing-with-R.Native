import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Dora</Text>
      <StatusBar style="auto" />
      <Link href={"/Profile"} style={{ color: "blue" }}>
        Go to the Profiles
      </Link>
    </View>
  );
}
