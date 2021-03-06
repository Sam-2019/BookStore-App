import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_CART } from "../../utils/graphqlFunctions";
import Product from "../../Components/cartItem";
import Empty from "../../Components/empty";
import ActivityIndicator from "../../Components/activityIndicator";

export default function CartScreen() {
  const { loading, error, data, refetch } = useQuery(GET_CART);

  console.log(data)

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Error />;
  }

  if (data.carts.length === 0) {
    return <Empty />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Product
        sku={item.sku}
        image={item.imageURL}
        price={item.price}
        quantity={item.quantity}
        cartID={item.cartID}
        refetch={refetch}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.carts}
        renderItem={renderItem}
        keyExtractor={(item) => item.productID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
});
