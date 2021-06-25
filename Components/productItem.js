import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function Product({ sku, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={{ width: 170, height: 250 }} />
      <View>
        <Text style={styles.text}>{sku}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 15,
  },
});
