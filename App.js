import "react-native-gesture-handler";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HomeScreen from "./Screens/Home";
import CartScreen from "./Screens/Cart";
import ProfileScreen from "./Screens/Profile";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <PaperProvider>
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
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return <Main />;
}
