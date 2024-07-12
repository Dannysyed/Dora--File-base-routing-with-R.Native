import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  const { loading, isLoggedIn, user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full w-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text className="text-white">{item.id}</Text>;
        }}
        ListHeaderComponent={() => (
          <View className="px-4 my-6 space-y-6 ">
            <View className="flex-row justify-between items-start mb-6 bg-red-50">
              <View>
                <Text className="text-gray-100 text-base">Welcome Back</Text>
                <Text className="text-white text-xl font-psemibold">
                  jsMastery
                </Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="h-10 w-9"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-base">Trending Video</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
