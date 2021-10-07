import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import Button from "./components/ButtonHi";
import Display from "./components/Display";

import styles from "./components/style";

export default function App() {
  const [display, setDisplay] = useState("0");

  /* addDigit = value => {
    setDisplay(value);
  }

  clearValue = () => {
    setDisplay("0");
  }

  setOperation = ope => {

  } */

  return (
    <SafeAreaView style={styles.container}>
      <Display value={display}/>
      <View style={styles.buttons}>
        <Button label="AC" style={styles.buttonTriple}/>
        <Button label="/" style={styles.button}/>
        <Button label="7" style={styles.button}/>
        <Button label="8" style={styles.button}/>
        <Button label="9" style={styles.button}/>
        <Button label="*" style={styles.button}/>
        <Button label="4" style={styles.button}/>
        <Button label="5" style={styles.button}/>
        <Button label="6" style={styles.button}/>
        <Button label="-" style={styles.button}/>
        <Button label="1" style={styles.button}/>
        <Button label="2" style={styles.button}/>
        <Button label="3" style={styles.button}/>
        <Button label="+" style={styles.button}/>
        <Button label="0" style={styles.button}/>
        <Button label="." style={styles.button}/>
        <Button label="=" style={styles.button}/>
      </View>
    </SafeAreaView>
  )
}