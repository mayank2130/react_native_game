import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  const [balance, setBalance] = useState(0);

  const makeMoney = () => {
    setBalance((prevBalance) => prevBalance + 10);
  };

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={["#00CCFF", "#007BA7"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.gradient}
        >
          <View style={[styles.containerInOne, styles.container]}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/card.png")}
                style={styles.logo}
              />
              <Text style={styles.txtStyle}>*** 7439</Text>
              <View style={styles.expTxtStyle}>
                <Text style={styles.txtStyle}>06/16</Text>
              </View>
            </View>
            <Text style={styles.headingTxt}>Balance:</Text>
            <Text style={[styles.balanceTxt]}> $ {balance}</Text>
          </View>
          <View style={styles.containerInTwo}>
            <Text style={[styles.footerTxt]}>$ 10.0</Text>
            <Text style={[styles.footerTxt]}>per click</Text>
          </View>
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={() => makeMoney()} style={styles.containerTwo}>
        <FontAwesome name="hand-o-up" size={75} color="black" />
        <Text style={{ fontFamily: "mon", marginTop: 5 }}>
          Click in this area to make money
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
  },
  footerTxt: {
    fontFamily: "mon-b",
    color: "#fff",
    letterSpacing: 2,
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 22,
    textAlign: "center",
  },
  headingTxt: {
    fontFamily: "mon",
    color: "#fff",
    letterSpacing: 4,
    marginLeft: 25,
    marginBottom: 8,
    fontSize: 15,
  },
  txtStyle: {
    fontFamily: "mon",
    fontSize: 20,
    paddingLeft: 20,
    color: "#848482",
  },
  expTxtStyle: {
    fontFamily: "mon",
    fontSize: 20,
    paddingLeft: 140,
    justifyContent: "space-between",
    color: "#848482",
  },
  balanceTxt: {
    fontFamily: "mon-b",
    color: "#fff",
    letterSpacing: 4,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 35,
    flexShrink: 1,
  },
  logoContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 40,
    marginLeft: 25,
  },
  logo: {
    height: 20,
    width: 22,
    // alignItems: "center",
    // marginBottom: 60,
    // marginLeft: 25,
  },
  containerInOne: {
    flex: 1,
    backgroundColor: "#343434",
    justifyContent: "flex-end",
    height: 155,
    marginTop: 50,
    margin: 10,
    borderRadius: 25,
  },
  containerInTwo: {
    backgroundColor: "#F5F5F5",
    opacity: 0.4,
    paddingTop: 35,
    margin: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  containerTwo: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 220,
    paddingBottom: 150,
  },
  gradient: {
    flex: 1,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
});

export default App;
