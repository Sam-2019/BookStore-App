import * as React from "react";
import { View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator animating={true} color={Colors.red800} />
  </View>
  );
}