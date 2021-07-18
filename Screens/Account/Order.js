import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_ORDER } from "../../utils/graphqlFunctions";
import Product from "../../Components/cartItem";
import Empty from "../../Components/empty";
import ActivityIndicator from "../../Components/activityIndicator";
import { getObjectData } from "../../utils/helper";

export default function OrderScreen() {
  const find = getObjectData();
  //console.log(find);
  const id = "60eb7a15b834770015248bc4";

  const { loading,error, data, refetch } = useQuery(GET_ORDER, {
    variables: { id },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Error />;
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
