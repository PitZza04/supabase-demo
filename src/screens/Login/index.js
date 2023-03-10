import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { supabase } from "../../config/initSupabase";
const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLogin = async () => {};

  return (
    <View style={styles.container}>
      {/* Text Input Container */}
      <View style={styles.loginForm}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your Email"
            selectionColor={"red"}
            placeholderTextColor={"#2B3A55"}
          ></TextInput>
        </View>
        {/* Password */}
        <View style={styles.inputWrapper}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your Password"
            selectionColor={"blue"}
            placeholderTextColor={"#2B3A55"}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
