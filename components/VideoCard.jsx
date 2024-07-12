import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import images from "../constants/images";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="justify-between gap-3 items-start flex-row ">
        <View className="border border-secondary h-[46px] w-[46px] rounded-lg p-0.5">
          <Image
            source={{ uri: avatar }}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="justify-start items-start  flex-.5 w-[69vw]">
          <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-gray-100 text-xs font-pregular">
            {username}
          </Text>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} resizeMode="contain" className="h-5 w-4" />
        </View>
      </View>

      {play ? (
        <Text
          className="text-white"
          onPress={() => {
            setPlay(false);
          }}
        >
          Play
        </Text>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setPlay(true);
          }}
          activeOpacity={0.3}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            resizeMode="contain"
            className="w-12 h-12 absolute"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
