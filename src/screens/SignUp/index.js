import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { authSignUp } from "../../redux/action/authSlice";
const SignUpScreen = ({ navigation }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const handleSignUp = () => {
    if (!email || !password) {
      return alert("Email and Password is needed");
    }
    dispatch(authSignUp({ email, password }));
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <View style={styles.inputWrapper}>
          <Text style={styles.text}>Email</Text>
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
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.textBtn}>{isLoading ? "Loading" : "SignUp"}</Text>
        </TouchableOpacity>
        <Button title="Go to Login" onPress={goToLogin} />
      </View>
    </View>
  );
};

export default SignUpScreen;
