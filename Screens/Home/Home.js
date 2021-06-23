import * as React from "react";
import { Text, View } from "react-native";
import Product from "../../Components/product";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Product />
    </View>
  );
}
