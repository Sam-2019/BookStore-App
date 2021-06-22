import "react-native-gesture-handler";
import * as React from "react";
import {  View, Text } from "react-native";
import {  Provider as PaperProvider } from "react-native-paper";


function Main() {
  return (

      <PaperProvider >
     
        <View>
    <Text>
      Hello
    </Text>
  </View>
    
      </PaperProvider>
 
  );
}

export default function App() {
  return <Main />
}
