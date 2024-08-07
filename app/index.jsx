import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";
import { useEffect } from "react";

export default function Index() {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) {
    return <Redirect href={"/home"} />;
  }
  useEffect(() => {
    if (!loading && isLogged) {
      return <Redirect href={"/home"} />;
    }
  }, [loading]);
  console.log(loading, isLogged, "indssdex");

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full min-h-[85vh] flex items-center justify-center  px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless Possibilities with {""}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="Contiue With Email"
            containerStyle="w-full mt-7"
            handlePress={() => {
              router.push("/sign-in");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
