import {
  Button,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../../config/initSupabase";
import useSWR, { mutate } from "swr";

import styles from "./styles";

import useSupabaseSWR from "../../hooks/useSupabaseSWR";

const BrandScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const [isloading, setIsLoading] = useState(false);
  const fetcher = async (url) => {
    console.log("URL:", url);
    const { data, error } = await supabase.from(url).select("*");
    if (error) throw error;
    if (data) return data;
    console.log("data", data);
  };
  const { data: brand, error } = useSWR("brand", fetcher);
  console.log("error: ", error);
  // const {
  //   data: brand,
  //   error,
  //   isloading,
  // } = useSupabaseSWR("brand", {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });
  console.log("Brand", brand);
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
      <Button title="Sign Out" onPress={handleSignOut} />
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
              <Text>{item.name}</Text>
              <Image
                source={{ uri: item.img_url }}
                style={{ height: 70, width: 70, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BrandScreen;
