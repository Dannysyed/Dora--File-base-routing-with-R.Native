import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import images from "../constants/images";
import icons from "../constants/icons";

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}) => {
  let [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2  h-16 px-4 bg-black-100 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={value}
        placeholder={"Search for a video topic"}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        secureTextEntry={title == "Password" && !showPassword}
      />

      <TouchableOpacity
        onPress={() => {
          setShowPassword((prev) => !prev);
        }}
      >
        <Image source={icons.search} resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
