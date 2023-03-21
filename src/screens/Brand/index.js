import {
  Button,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../../config/initSupabase";
import styles from "./styles";

import useSupabaseSWR from "../../hooks/useSupabaseSWR";

const BrandScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const {
    data: brand,
    error,
    isloading,
  } = useSupabaseSWR("Brand", {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const handleSignOut = async () => {
    console.log("sign out");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  };
  const handlePress = async (id) => {
    if (!id) return;
    navigation.navigate("Model", { id });
  };
  if (isloading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <Text>BrandScreen</Text>
      <Text>{user?.user?.email}</Text>
      <Text>{user?.email}</Text>
      <View style={styles.groupListahan}>
        {brand?.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => handlePress(item.id)}
              style={styles.listahan}
            >
              <Text key={item.id}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default BrandScreen;
