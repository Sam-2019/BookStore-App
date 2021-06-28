import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_ORDER } from "../../utils/graphqlFunctions";
import Product from "../../Components/cartItem";
import Empty from "../../Components/empty";
import ActivityIndicator from "../../Components/activityIndicator";

export default function OrderScreen() {
  const id = "60ae5d2c7cd40e00155f7ec2";

  const { loading, data, refetch } = useQuery(GET_ORDER, {
    variables: { id },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (data.userOrder.length === 0) {
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
        showDelete={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.userOrder}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
