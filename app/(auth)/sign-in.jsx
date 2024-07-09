import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import images from "../../constants/images";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setFrom] = useState({ email: "", password: "" });
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 min-h-[83vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-26 w-40"
          />
          <Text className="text-white text-2xl font-psemibold">Sign in</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setFrom({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setFrom({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <Text className="text-white self-end mt-3">Forgot password</Text>
          <CustomButton title={"Log in"} containerStyle={"mt-4"} />
          <View className="mt-4 justify-center pt-5 flex-row gap-2">
            <Text className="text-white text-base ">
              Don't have an account?{" "}
              <Link href={"/sign-up"} className="text-secondary-200">
                Signup
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
