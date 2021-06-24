import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Card } from "react-native-paper";

const item = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 3,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 4,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 5,
    name: "Leanne Graham",
    username: "Bret",
  },
];

const ItemCard = ({ title }) => (
  <View style={styles.card}>
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Title title={title} subtitle="Card Subtitle" />
    </Card>
  </View>
);

function List() {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <ItemCard title={item.name} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});
