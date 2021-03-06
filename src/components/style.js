import { StyleSheet, Dimensions, TouchableHighlight } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888"
  },
  operationButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    color: "#fff",
    backgroundColor: "#fa8231",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888"
  },
  buttonDouble: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: (Dimensions.get("window").width / 4) * 2,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888"
  },
  buttonTriple: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: (Dimensions.get("window").width / 4) * 3,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888"
  },
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end"
  },
  displayValue:{
    fontSize: 60,
    color: "#fff"
  }
})