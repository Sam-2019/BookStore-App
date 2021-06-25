import * as React from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/client";

import { GET_PRODUCTS }  from "../../graphqlFunctions";
import Product from "../../Components/productItem";
import Error from "../../Components/error";
import ActivityIndicator from "../../Components/activityIndicator";

export default function ProductsScreen() {
  const navigation = useNavigation();
  
  const { loading, data, error } = useQuery(GET_PRODUCTS, {
    variables: {
      offset: 1,
      limit: 12,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Error />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          navigation.navigate("Product", {
            sku: item.sku,
          })
        }
      >
        <Product sku={item.sku} image={item.imageURL} />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.products.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: 100,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
});
