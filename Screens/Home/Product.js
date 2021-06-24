import * as React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql functions";

export default function ProductScreen() {
  const route = useRoute();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { sku: route.params.sku },
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
