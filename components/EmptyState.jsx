import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-6">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="h-[210px] w-[270px]"
      />
      <Text className="text-gray-100 text-l">{subtitle}</Text>
      <Text className="text-white text-xl font-psemibold">{title}</Text>
      <CustomButton title={"Create Video"} containerStyle={"w-full my-5"} />
    </View>
  );
};

export default EmptyState;
