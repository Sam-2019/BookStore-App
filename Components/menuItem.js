import * as React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function MenuItem({ action, text }) {
  const { colors } = useTheme();
  // style={{ color: colors.primary }}

  return (
    <Pressable onPress={action} style={styles.itemContainer}>
      <Text style={styles.text}>{text}</Text>
      <MaterialIcons name="chevron-right" size={25} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,

    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,

    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 20,
  },
});
