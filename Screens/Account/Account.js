import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Account() {
  const navigation = useNavigation();

  const order = () => {
    navigation.navigate("Order");
  };

  const wishlist = () => {
    navigation.navigate("Wishlist");
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Pressable onPress={order}>
          <Text style={styles.text}>Orders</Text>
        </Pressable>
      </View>

      <View style={styles.item}>
        <Pressable onPress={wishlist}>
          <Text style={styles.text}>Wishlist</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 8,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});
