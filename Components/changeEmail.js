import * as React from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import Spacer from "./spacer";

const ChangeName = () => {
  const [loading, setLoading] = React.useState(false);
  const [currentEmail, setCurrentEmail] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");

  const submit = () => {
    setLoading(true);
    Alert.alert(currentEmail, newEmail);
  };

  const clearForm = () => {
    setCurrentEmail("");
    setNewEmail("");
  };

  return (
    <View>
      <Headline>Change Email</Headline>
      <View>
        <TextInput
          label="Current Email"
          value={currentEmail}
          onChangeText={(text) => setCurrentEmail(text)}
        />
        <Spacer />
        <TextInput
          label="New Email"
          value={newEmail}
          onChangeText={(text) => setNewEmail(text)}
        />
        <Spacer />
      </View>

      <Button mode="contained" onPress={submit} loading={loading}>
        {loading ? "Loading" : "Submit"}
      </Button>

    </View>
  );
};

export default ChangeName;
