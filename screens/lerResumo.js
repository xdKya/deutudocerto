import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

export default class LerResumo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/fundo.jpg")}
        style={Styles.imageBackground}
      >
        <View style={Styles.appTitle}>
          <Text style={Styles.titleText}>
            {this.props.route.params.resumo.titulo}
          </Text>
        </View>
        <ScrollView style={Styles.cardContainer}>
          {/* <View > */}
          <Text style={Styles.imputResumo}>
            {this.props.route.params.resumo.resumo}
          </Text>
          {/* </View> */}
        </ScrollView>
      </ImageBackground>
    );
  }
}
const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },

  cardContainer: {
    marginTop: 10,
    flex: 0.8,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    //justifyContent: "flex-start",
    borderRadius: 15,
    minHeight: 500,
    // flexWrap: "wrap",
    width: "90%",
    //margin: 20,
    //flexDirection: "row",
    marginBottom: 10,
  },

  appTitle: {
    //flex: 0.2,
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Bubblegum-Sans",
  },
  imputResumo: {
    color: "black",
    fontFamily: "Bubblegum-Sans",
    fontSize: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    flex: 0.7,
    resizeMode: "cover",
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
