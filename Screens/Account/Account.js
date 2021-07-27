import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "../../Components/menuItem";
import ModalBox from "../../Components/modal";
import ChangeName from "../../Components/changeName";
import ChangeEmail from "../../Components/changeEmail";
import ChangePassword from "../../Components/changePassword";

export default function Account({ navigation }) {
  //const navigation = useNavigation();

  const [showChangeName, hideChangeName] = React.useState(false);
  const [showChangeEmail, hideChangeEmail] = React.useState(false);
  const [showChangePassword, hideChangePassword] = React.useState(false);

  const order = () => {
    navigation.navigate("Order");
  };

  const wishlist = () => {
    navigation.navigate("Wishlist");
  };

  const changeName = () => hideChangeName(true);
  const changeEmail = () => hideChangeEmail(true);
  const changePassword = () => hideChangePassword(true);

  return (
    <View style={styles.container}>
      <MenuItem text="Order" action={order} />
      <MenuItem text="WishList" action={wishlist} />
      <MenuItem text="Change Name" action={changeName} />
      <MenuItem text="Change Email" action={changeEmail} />
      <MenuItem text="Change Password" action={changePassword} />
      <MenuItem text="Logout" />

      <ModalBox
        visible={showChangeName}
        hideModal={() => hideChangeName(false)}
        children={<ChangeName />}
        
      />
      <ModalBox
        visible={showChangeEmail}
        hideModal={() => hideChangeEmail(false)}
        children={<ChangeEmail />}
      />
      <ModalBox
        visible={showChangePassword}
        hideModal={() => hideChangePassword(false)}
        children={<ChangePassword />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
