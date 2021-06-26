import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";
import { DELETE_CART } from "../graphqlFunctions";

export default function CartItem({
  sku,
  image,
  cartID,
  price,
  quantity,
  refetch,
}) {
  const navigation = useNavigation();

  const viewItem = () => {
    navigation.navigate("Product", {
      sku: sku,
    });
  };

  const [
    deleteCart,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_CART);

  const deleteItem = () => {
    deleteCart({
      variables: {
        id: String(cartID),
        user: String(uniqueID),
      },
    });

    const timer = setTimeout(() => {
      refetch();
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <View style={styles.card}>
      <Pressable onPress={viewItem}>
        <View style={styles.cardImage}>
          <Image source={{ uri: image }} style={{ width: 100, height: 150 }} />
        </View>
      </Pressable>

      <View style={styles.cardDetail}>
        <Pressable onPress={viewItem}>
          <View style={styles.cardText}>
            <Text style={styles.text}>{sku}</Text>
            <Text style={styles.text}>{price}</Text>
            <Text style={styles.text}>{quantity}</Text>
          </View>
        </Pressable>

        <View style={styles.cardAction}>
          <Button mode="outlined" onPress={deleteItem}>
            Delete
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  cardImage: {
    width: 105,
    height: 150,
  },
  cardDetail: {
    flex: 1,
    flexDirection: "column",
  },
  cardText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardAction: {
    alignItems: "flex-end",
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 20,
    color: "black",
    marginBottom: 5,
  },
});
