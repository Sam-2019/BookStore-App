import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";

import { SIGNUP } from "../../utils/graphqlFunctions";
import DialogBox from "../../Components/dialog";

export default function Signup() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  const login = () => {
    navigation.navigate("Login");
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const [signup, { loading, error, data }] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      navigation.navigate("Login");
      clearForm();
    },
  });



  const submit = async () => {
    let empty = firstName && lastName && email && password;

    if (empty === "") {
      setVisible(true);
    }

    if (empty !== "") {
      try {
        signup({
          variables: {
            firstName: String(firstName),
            lastName: String(lastName),
            email: String(email),
            password: String(password),
          },
        });
      } catch (error) {
        console.error(error);
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

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={submit} loading={loading}>
          {loading ? "Loading" : "Submit"}
        </Button>

        <Button mode="outline" onPress={login}>
          Login
        </Button>
      </View>


      <DialogBox
        visible={visible}
        hideDialog={hideDialog}
        title="Error"
        text="Please fill an entries"
        action="Okay"
      />
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

  buttonContainer: {
    marginTop: 10,
  },
});
