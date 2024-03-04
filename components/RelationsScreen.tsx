import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

export default function BusinessScreen() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      // headerTransparent: true,
    });
  }, []);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.headingText}>Build Relations</Text>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardFour,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <ImageBackground
                  source={require("../assets/images/president.png")}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 25,
                    margin: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></ImageBackground>
                <Text style={styles.innerTxt}>Presidents</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardFour,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <ImageBackground
                  source={require("../assets/images/bankers.png")}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 25,
                    margin: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <Text style={styles.innerTxt}>Investment Bankers</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardFour,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <ImageBackground
                  source={require("../assets/images/mob.png")}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 25,
                    margin: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <Text style={styles.innerTxt}>Mafia & Rich Oligarchs</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  innerTxt: {
    fontFamily: "mon-sb",
    fontSize: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginBottom: 10,
  },
  cardFour: {
    height: 180,
    width: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  imageBackground: {
    height: 60,
    width: 60,
    borderRadius: 25,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTwo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
