import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as Font from "expo-font";
import CardResumo from "./cardResumo";
import firebase from "firebase";

export default class Resumo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumos: [],
      materia: this.props.route.params.materia,
    };
  }
  componentDidMount() {
    this.fetchResumo();
  }
  fetchResumo = () => {
    let materia = this.state.materia;
    firebase
      .database()
      .ref("/posts/" + materia + "/")
      .on(
        "value",
        (snapshot) => {
          let resumos = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              resumos.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({ resumos: resumos });
          // this.props.setUpdateToFalse();
        },
        function (errorObject) {
          console.log("A leitura falhou: " + errorObject.code);
        }
      );
  };
  renderItem = ({ item: resumo }) => {
    return <CardResumo resumo={resumo} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    console.log(this.state.materia);
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={require("../assets/fundo.jpg")}
          style={Styles.imageBackground}
        >
          <View style={Styles.appTitle}>
            <Text style={Styles.titleText}>
              Resumos de {this.state.materia}
            </Text>
          </View>
          {!this.state.resumos[0] ? (
            <View
              style={[
                Styles.appTitle,
                {
                  backgroundColor: "rgba(255,255,255,0.5)",
                  marginTop: 50,
                  marginBottom: 50,
                  marginHorizontal: 10,
                  borderRadius: 15,
                },
              ]}
            >
              <Text style={Styles.titleText}>Nenhum resumo disponivel</Text>
            </View>
          ) : (
            <View style={Styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.resumos}
                renderItem={this.renderItem}
              />
            </View>
          )}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("criarResumo");
            }}
          >
            <Image source={require("../assets/plus.png")} style={Styles.plus} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  appTitle: {
    flex: 0.1,
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
  },
  cardContainer: {
    flex: 0.8,
  },
});
