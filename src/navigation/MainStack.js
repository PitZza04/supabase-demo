import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BrandScreen from "../screens/Brand";
import ModelScreen from "../screens/Model";
import RegionScreen from "../screens/RegionSWR";
import ServicesScreen from "../screens/Services";
import EmergencyScreen from "../screens/Emergency";
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="Brand" component={BrandScreen} />
        <Stack.Screen name="RegionSWR" component={RegionScreen} />
        <Stack.Screen name="Model" component={ModelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
