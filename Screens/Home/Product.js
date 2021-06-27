import * as React from "react";
import { ScrollView, View } from "react-native";
import { Card, Button, Paragraph } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";

import { GET_PRODUCT }  from "../../utils/graphqlFunctions";
import Error from "../../Components/error";
import ActivityIndicator from "../../Components/activityIndicator";

export default function ProductScreen() {
  const route = useRoute();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { sku: route.params.sku },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{ uri: data.product.imageURL }} />
        <Card.Title title={data.product.name} subtitle={data.product.author} />
        <Card.Content>
          <Paragraph>{data.product.detail}</Paragraph>
        </Card.Content>
      </Card>

      <View>
        <Button
          mode="contained"
          uppercase={true}
          onPress={() => console.log("Pressed")}
        >
          buy now
        </Button>
        <Button
          mode="outlined "
          uppercase={true}
          onPress={() => console.log("Pressed")}
        >
          add to cart
        </Button>
      </View>
    </ScrollView>
  );
}
