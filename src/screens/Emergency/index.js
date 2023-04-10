import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useSWR from "swr";
import { fetchEmergencyType } from "../../hooks/emergency";
const EmergencyScreen = ({ navigation }) => {
  const { data: emergencyType, error: emergencyTypeError } = useSWR(
    "emergency_type",
    fetchEmergencyType
  );
  console.log("emergencyType", emergencyType);
  console.log("emergencyTypeError", emergencyTypeError);
  return (
    <View>
      <Text>{JSON.stringify(emergencyType, null, 2)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Services")}
      />
    </View>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({});
