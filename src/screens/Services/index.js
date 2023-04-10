import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import useSWR from "swr";
import {
  fetchServicesCategory,
  fetchServicesOffered,
} from "../../hooks/services";

const ServicesScreen = ({ navigation }) => {
  const { data: servicesCategory, error: servicesCategoryError } = useSWR(
    "services_category",
    fetchServicesCategory
  );
  const { data: servicesOffered, error: servicesOfferedError } = useSWR(
    "services_offered",
    fetchServicesOffered
  );

  // console.log("servicesCategory", servicesCategory);
  // console.log("servicesCategoryError", servicesCategoryError);
  return (
    <View>
      <Button
        title="Go to Emergency"
        onPress={() => navigation.navigate("Emergency")}
      />
      <Text>{JSON.stringify(servicesOffered, null, 2)}</Text>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
