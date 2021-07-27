import * as React from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import Spacer from "./spacer";

const ChangeName = () => {
  const [loading, setLoading] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const submit = () => {
    setLoading(true);
    Alert.alert(firstName, lastName);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
  };

  return (
    <View>
      <Headline>Change Name</Headline>
      <View>
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Spacer />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
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
