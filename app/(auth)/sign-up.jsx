import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setFrom] = useState({ email: "", password: "", username: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  let submit = () => {
    if (form.username && form.email && form.password !== "") {
      setIsSubmitting(true);
      try {
        const result = createUser({
          username: form.username,
          email: form.email,
          password: form.password,
        });
        // context will be used
        router.replace("/home");
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      Alert.alert("Error", "Please fill the form");
      return null;
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 min-h-[83vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-26 w-40"
          />
          <Text className="text-white text-2xl font-psemibold my-4">
            Sign up
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setFrom({ ...form, username: e })}
            otherStyles="mt-7"
          />
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

          <CustomButton
            title={"Sign up"}
            containerStyle={"mt-6"}
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="mt-4 justify-center pt-5 flex-row gap-2">
            <Text className="text-white text-base ">
              Already have a account?{" "}
              <Link href={"/sign-in"} className="text-secondary-200">
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
