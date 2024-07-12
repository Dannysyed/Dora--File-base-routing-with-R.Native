import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmptyState from "./EmptyState";

const Trending = ({ post }) => {
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
      ListEmptyComponent={() => (
        <EmptyState
          title={"No videos found for this profile"}
          subtitle={"No Videos Found"}
        />
      )}
    />
  );
};

export default Trending;

const styles = StyleSheet.create({});
