import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, isLoggedIn, user } = useGlobalContext();
  let { data: posts, refetch } = useAppwrite(getAllPosts);
  let { data: latestPosts } = useAppwrite(getLatestPosts);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <VideoCard video={item} />;
        }}
        ListEmptyComponent={() => <EmptyState />}
        ListHeaderComponent={() => (
          <View className="px-4 my-6 space-y-6 ">
            <View className="flex-row justify-between items-start mb-6">
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
            <View className="w-full  pb-8">
              <Text className="text-gray-100 text-2xl">Trending Video</Text>
              <Trending post={latestPosts} />
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
