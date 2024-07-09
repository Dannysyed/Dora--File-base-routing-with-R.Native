import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setFrom] = useState({ email: "", password: "" });
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-white">SignIn</Text>
      <FormField
        title="email"
        value={form.email}
        handleChangeText={(e) => setFrom({ ...form, email: e })}
        otherStyles="mt-7"
        keyboardType="email-address"
      />
      <FormField
        title="password"
        value={form.password}
        handleChangeText={(e) => setFrom({ ...form, password: e })}
        otherStyles="mt-7"
      />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
