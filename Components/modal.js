import * as React from "react";
import { StyleSheet } from "react-native";
import { Portal, Modal, Button } from "react-native-paper";
import Spacer from "../Components/spacer";

const ModalBox = ({ hideModal, visible, children }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        {children}
        <Spacer />
        <Button mode="outline" onPress={hideModal}>
          Cancel
        </Button>
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
