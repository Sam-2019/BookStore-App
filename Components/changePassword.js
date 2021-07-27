import * as React from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import Spacer from "./spacer";

const ChangeName = () => {
  const [loading, setLoading] = React.useState(false);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const submit = () => {
    setLoading(true);
    Alert.alert(currentPassword, newPassword);
  };

  const clearForm = () => {
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <View>
      <Headline>Change Password</Headline>
      <View>
        <TextInput
          label="Current Password"
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
        <Spacer />
        <TextInput
          label="New Password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
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
