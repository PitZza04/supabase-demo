import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../redux/action/authSlice";
const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Email and Password is needed");
    }
    dispatch(authSignIn({ email, password }));
  };

  return (
    <View style={styles.container}>
      {/* Text Input Container */}
      <View style={styles.loginForm}>
        <View style={styles.inputWrapper}>
          <Icon name="ballot" size={30} color="#900" />
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
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.textBtn}>{isLoading ? "Loading" : "Login"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
