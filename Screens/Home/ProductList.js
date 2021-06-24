import * as React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql functions";
import Product from "../../Components/product";

export default function ProductsScreen() {
  const navigation = useNavigation();
  const { loading, data, error } = useQuery(GET_PRODUCTS, {
    variables: {
      offset: 1,
      limit: 12,
    },
  });

  let content;

  function viewProduct(sku) {}

  if (loading) {
    content = (
      <View>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>
    );
  }

  if (error) {
    content = (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.GridViewContainer}>
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

  if (data) {
    content = (
      <FlatList
        data={data.products.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    );
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
  },
  GridViewContainer: {
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
