import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../../components/CustomButton";
import { logout } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { Redirect, router } from "expo-router";
import { Route } from "expo-router/build/Route";

const Profiles = () => {
  const { loading, isLogged, user } = useGlobalContext();
  useEffect(() => {
    if (!loading && isLogged) {
      return <Redirect href={"/home"} />;
    } else {
      return <Redirect href={"/sign-in"} />;
    }
  }, []);

  let submit = () => {
    logout();
    router.navigate("/sign-in");
  };
  return (
    <View>
      <Text>Profiles</Text>
      <CustomButton title={"logout"} handlePress={submit} />
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({});
