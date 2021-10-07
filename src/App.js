import React from "react";
import { SafeAreaView, Text } from "react-native";

import InputValue from "./components/InputValue";

import style from "./components/style";

export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <InputValue/>
      <Text>sad</Text>
    </SafeAreaView>
  )
}