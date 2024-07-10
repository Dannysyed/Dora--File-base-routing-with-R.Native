import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { loading, isLoggedIn, user } = useGlobalContext();

  return <View>{/* <Text> Hi {user.username} welcome to app</Text> */}</View>;
};

export default Home;

const styles = StyleSheet.create({});
