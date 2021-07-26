import * as React from "react";
import { StyleSheet, View, Modal, Portal, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuItem from "../../Components/menuItem";
import ModalBox from "../../Components/modal";

export default function Account() {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const order = () => {
    navigation.navigate("Order");
  };

  const wishlist = () => {
    navigation.navigate("Wishlist");
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <MenuItem action={order} text="Order" />
      <MenuItem action={wishlist} text="WishList" />
      <MenuItem action={showModal} text="Change Name" />
      <MenuItem action={wishlist} text="Change Email" />
      <MenuItem text="Change Password" />
      <MenuItem text="Logout" />

      <ModalBox
        showModal={showModal}
        hideModal={hideModal}
        visible={visible}
        setVisible={setVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
