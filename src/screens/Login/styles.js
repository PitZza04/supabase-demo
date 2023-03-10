import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  loginForm: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  inputWrapper: {
    flexDirection: "column",
    width: "80%",
  },
  textInput: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "green",
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
  },
  textBtn: {
    color: "#fff",
  },
  text: {
    color: "#000",
    marginTop: 5,
  },

  button: {
    borderRadius: 5,
    height: 50,
    padding: 10,
    backgroundColor: "green",
    justifyContent: "center",
    marginBottom: 5,
  },
});

export default styles;
