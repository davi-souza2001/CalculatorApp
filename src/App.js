import React from "react";
import { SafeAreaView } from "react-native";

import First from "./components/First";
import Second from "./components/Second";
import ButtonHi from "./components/ButtonHi";

import style from "./components/style";

export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <First/>
      <Second textUser="Teste da função"/>
      <ButtonHi/>
    </SafeAreaView>
  )
}