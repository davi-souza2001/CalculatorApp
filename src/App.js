import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import First from "./components/First";

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <First/>
    </SafeAreaView>
  )
}