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

export default function ElevatedCards() {
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
          <Text style={styles.headingText}>Choose a new business category</Text>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Grocery Store</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Factory</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Construction </Text>
                <Text style={styles.innerTxt}>Company </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Intelligence</Text>
                <Text style={styles.innerTxt}>Company</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Bank</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Tech Startup</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Oil & Gas</Text>
                <Text style={styles.innerTxt}>Company</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Power Plants</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Selling Drugs</Text>
                <Text style={styles.innerTxt}>Operation</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.cardThree,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={styles.innerTxt}>Private Militia </Text>
                <Text style={styles.innerTxt}>Company </Text>
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
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginBottom: 10,
  },
  seperator: {
    marginTop: 50,
  },
  cardThree: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardFour: {
    height: 180,
    width: 380,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardImage: {
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardSemiBody: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    gap: 45,
  },
  cardTilte: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 15,
  },
  cardFooter: {
    fontSize: 15,
  },
  headingTextTwo: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginBottom: 10,
  },
  overlayText: {
    bottom: 0,
    color: "black",
    fontSize: 16,
  },
  container: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
  },
  containerTwo: {
    // height: "auto",
    // width:"auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerThree: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    flex: 1,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 140,
    borderRadius: 4,
  },
  cardTwo: {
    flex: 1,
    margin: 8,
    flexDirection: "row",
    gap: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  innerCard: {
    flex: 1,
    marginLeft: 10,
    paddingBottom: 4,
    paddingTop: 4,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    // backgroundColor:"#fff"
    // height: 100,
    // width: 100,
    // borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  gradient: {
    flex: 1,
    borderRadius: 35,
    elevation: 8,
  },
});