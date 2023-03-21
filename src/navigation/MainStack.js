import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BrandScreen from "../screens/Brand";
import ModelScreen from "../screens/Model";
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Brand" component={BrandScreen} />
        <Stack.Screen name="Model" component={ModelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
