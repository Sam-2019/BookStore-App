import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartListScreen from "./cartList";
import Product from "../Home/Product"

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={CartListScreen} />
      <Stack.Screen
        name="Product"
        component={Product}
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
