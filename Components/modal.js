import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Portal, Modal } from "react-native-paper";

const ModalBox = ({ hideModal, visible }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,

    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
