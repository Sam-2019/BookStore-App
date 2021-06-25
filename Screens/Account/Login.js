import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useLazyQuery } from "@apollo/client";

import { LOGIN } from "../../graphqlFunctions";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    navigation.navigate("Signup");
  };

  const [loginUser, { error }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      console.log(data);
      clearForm();
      // store the token
      // localStorage.setItem('token', data.signUp);
      // update the local cache
      //  client.writeData({ data: { isLoggedIn: true } });
      // redirect the user to the homepage
      //  props.history.push('/');
    },
  });

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const submit = async () => {
    let empty = email && password;

    if (empty === "") {

    }

    if (empty !== "") {
      try {
        loginUser({ variables: { email, password } });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
      right={<TextInput.Icon name="eye" />}
     />
      </View>

      <View style={styles.button}>
        <Button mode="contained" onPress={submit}>
          Submit
        </Button>
        <Button mode="outline" onPress={signup}>
          Signup
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignSelf: "center",
  },
  header_text: {
    fontSize: 30,
  },
  button: {
    marginTop: 10,
  },
});
