import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { supabase } from "../../config/initSupabase";
import useSupabaseSWR from "../../hooks/useSupabaseSWR";
const RegionScreen = () => {
  const {
    data: region,
    error,
    isloading,
  } = useSupabaseSWR("region", {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log("awit", region);
  return (
    <View>
      <Text>RegionScreen</Text>
    </View>
  );
};

export default RegionScreen;
