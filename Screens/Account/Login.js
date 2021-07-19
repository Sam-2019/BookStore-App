import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useLazyQuery } from "@apollo/client";

import { storeObjectData } from "../../utils/helper";
import { LOGIN } from "../../utils/graphqlFunctions";
import DialogBox from "../../Components/dialog";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  const signup = () => {
    navigation.navigate("Signup");
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const [login, { loading, error }] = useLazyQuery(LOGIN, {
    onCompleted: async (data) => {
      console.log(data);
      // if (Platform.OS === "web") {
      //   return (
      //     await storeObjectData(data.login),
      //     navigation.navigate("Home", { screen: "Products" }),
      //     clearForm()
      //   );
      // }

      // await saveValueFor(data.login);
      // navigation.navigate("Home", { screen: "Products" });

      clearForm();
    },
  });

  const submit = async () => {
    let empty = email && password;

    if (empty === "") {
      setVisible(true);
    }

    if (empty !== "") {
      try {
        login({ variables: { email, password } });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
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
          <Button mode="contained" onPress={submit} loading={loading}>
            {loading ? "Loading" : "Submit"}
          </Button>
          <Button mode="outline" onPress={signup}>
            Signup
          </Button>
        </View>
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
