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
const BrandScreen = () => {
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);
  // useEffect(() => {
  //   async function getBrands() {
  //     const { data: brand, error } = await supabase.from("Brand").select("*");
  //     const { data: allBrands, error: errorModel } = await supabase
  //       .from("Brand")
  //       .select("name, id, Model (name, brand_id)");
  //     console.log(JSON.stringify(allBrands[0].name));
  //     setBrand(brand);
  //     setLoading(false);
  //   }
  //   getBrands();
  // }, []);
  const handleSignOut = async () => {
    console.log("sign out");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  };
  const handlePress = async (id) => {
    const { data: brandModel, error: errorModel } = await supabase
      .from("Brand")
      .select("name, Model (name, brand_id)")
      .match({ id: id });

    console.log("Model", brandModel[0].Model);
    console.log("Brand", brandModel[0].name);
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
      <Text>BrandScreen</Text>
      <Text>{user?.user.email}</Text>
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
