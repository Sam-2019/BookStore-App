import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "./ProductList";
import ProductScreen from "./Product";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.sku,
          headerTintColor: "black",
          headerTitleStyle: {
            textTransform: "capitalize",
          },
        })}
      />
    </Stack.Navigator>
  );
}
