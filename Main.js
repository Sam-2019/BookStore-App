import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HomeStack from "./Screens/Home/Home";
import CartStack from "./Screens/Cart/Cart";
import AccountStack from "./Screens/Account/AccountStack";

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    accent: "yellow",
    placeholder: "green",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Cart") {
                iconName = focused ? "shopping-cart" : "shopping-cart";
              } else {
                iconName = focused ? "user-circle-o" : "user-circle";
              }
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "green",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Account" component={AccountStack} />
          <Tab.Screen name="Cart" component={CartStack} />
          <Tab.Screen name="Home" component={HomeStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
