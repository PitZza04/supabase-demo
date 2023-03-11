import { Button, ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../../config/initSupabase";
const BrandScreen = () => {
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    async function getCountries() {
      const { data, error } = await supabase.from("brand").select();
      setBrand(data);
      setLoading(false);
    }
    getCountries();
  }, []);
  const handleSignOut = async () => {
    console.log("sign out");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  };
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <Text>BrandScreem</Text>
      <Text>{user.email}</Text>
      {brand?.map((item) => {
        return <Text key={item.id}>{item.name}</Text>;
      })}
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default BrandScreen;
