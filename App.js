import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import "react-native-url-polyfill/auto";
import RootNavigation from "./src/navigation";

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        showHideTransition={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
