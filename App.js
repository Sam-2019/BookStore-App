import "react-native-gesture-handler";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import List from "./List";

function Main() {
  return (
    <PaperProvider>
      <List />
    </PaperProvider>
  );
}

export default function App() {
  return <Main />;
}
