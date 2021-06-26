import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Account from "./Account";
import Login from "./Login";
import Signup from "./Signup";
import Order from "./Order";
import Wishlist from "./Wishlist";
import Product from '../Home/Product'

const Stack = createStackNavigator();

export default function AccountScreen() {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("Login");
  };

  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerRight: () => (
            <Button mode="contained" onPress={login}>
              Login
            </Button>
          ),
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
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
