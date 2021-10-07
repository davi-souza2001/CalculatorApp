import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import Button from "./components/ButtonHi";
import Display from "./components/Display";

import styles from "./components/style";

export default function App() {
  const [display, setDisplay] = useState("0");

  function addDigit(value){
    setDisplay(value);
  }
  
  function clearMemory(){
    setDisplay("0");
  }

  function setOperation(operation){
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={display}/>
      <View style={styles.buttons}>
        <Button label="AC" style={styles.buttonTriple} onClick={clearMemory}/>
        <Button label="/" style={styles.operationButton} onClick={() => setOperation("/")} />
        <Button label="7" style={styles.button} onClick={() => addDigit(7)}/>
        <Button label="8" style={styles.button} onClick={() => addDigit(8)}/>
        <Button label="9" style={styles.button} onClick={() => addDigit(9)}/>
        <Button label="*" style={styles.operationButton} onClick={() => setOperation("*")} />
        <Button label="4" style={styles.button} onClick={() => addDigit(4)}/>
        <Button label="5" style={styles.button} onClick={() => addDigit(5)}/>
        <Button label="6" style={styles.button} onClick={() => addDigit(6)}/>
        <Button label="-" style={styles.operationButton} onClick={() => setOperation("-")}/>
        <Button label="1" style={styles.button} onClick={() => addDigit(1)}/>
        <Button label="2" style={styles.button} onClick={() => addDigit(2)}/>
        <Button label="3" style={styles.button} onClick={() => addDigit(3)}/>
        <Button label="+" style={styles.operationButton} onClick={() => setOperation("+")}/>
        <Button label="0" style={styles.buttonDouble} onClick={() => addDigit(0)}/>
        <Button label="." style={styles.button} onClick={() => addDigit(".")}/>
        <Button label="=" style={styles.operationButton} onClick={() => setOperation("=")}/>
      </View>
    </SafeAreaView>
  )
}