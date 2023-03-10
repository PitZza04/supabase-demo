import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../../config/initSupabase";
const BrandScreen = () => {
  const [brand, setBrand] = useState(null);
  useEffect(() => {
    async function getCountries() {
      const { data, error } = await supabase.from("brand").select();
      setBrand(data);
    }
    getCountries();
  }, []);

  return (
    <View>
      <Text>BrandScreem</Text>
      {brand?.map((item) => {
        return <Text>{item.name}</Text>;
      })}
    </View>
  );
};

export default BrandScreen;
