import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import "react-native-url-polyfill/auto";
import RootNavigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/reducer/store";
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        showHideTransition={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}
