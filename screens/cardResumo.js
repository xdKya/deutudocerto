import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CardResumo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumo: this.props.resumo.value,
    };
  }
  render() {
    var resumo = this.state.resumo;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("lerResumo", { resumo: resumo });
        }}
      >
        <View style={Styles.container}>
          <Text style={Styles.imputResumo}>{resumo.titulo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 2,
    borderColor: "white",
    color: "black",
    marginTop: 10,
    width: 400,
    minHeight: 80,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    flex: 1,
  },
  appTitle: {
    flex: 0.2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Bubblegum-Sans",
  },
  materiaText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 30,
  },
  materiaButton: {
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    width: 240,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  plus: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
  cardContainer: {
    flex: 0.93,
  },
  imputResumo: {
    color: "black",
    fontFamily: "Bubblegum-Sans",
    textAlign: "center",
    fontSize: 28,
  },
  enviar: {
    alignSelf: "center",
    backgroundColor: "#547FF0",
    marginTop: 20,
    borderRadius: 20,
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Bubblegum-Sans",
    color: "white",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
});
