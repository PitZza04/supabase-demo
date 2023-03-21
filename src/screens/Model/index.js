import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import useSupabaseJoinSWR from "../../hooks/useSupabaseJoinSWR";

const ModelScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const {
    data: model,
    error: errorModel,
    isLoading,
  } = useSupabaseJoinSWR("Brand/Model/" + id, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  console.log("Model", model);
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <Text>ModelScreen</Text>
      <Text>{JSON.stringify(model)}</Text>
    </View>
  );
};

export default ModelScreen;

const styles = StyleSheet.create({});
