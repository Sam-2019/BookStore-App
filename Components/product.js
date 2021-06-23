import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

export default function Product({ title }) {
  return (
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Title title="Hello" subtitle="Card Subtitle" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});
