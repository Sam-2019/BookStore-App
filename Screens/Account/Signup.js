import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";

import { SIGNUP } from "../../utils/graphqlFunctions";

export default function Signup() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigation.navigate("Login");
  };

  const [signupUser, { loading: Loading, error: Error, data: Data }] =
    useMutation(SIGNUP, {
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
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const submit = async () => {
    let empty = firstName && lastName && email && password;

    if (empty === "") {
    }

    if (empty !== "") {
      try {
        signupUser({
          variables: {
            first_name: String(firstName),
            last_name: String(lastName),
            email: String(email),
            password: String(password),
          },
        });
      } catch (error) {
        console.error(error);
      } finally {
        clearForm();
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />

        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
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

        <Button mode="outline" onPress={login}>
          Login
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
