import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import images from "../constants/images";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setPlay(false);
    } else if (status.error) {
      console.error("Playback error:", status.error);
    }
  };
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
        <Video
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay={true}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          onError={(error) => console.error("Video error:", error)}
        />
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
