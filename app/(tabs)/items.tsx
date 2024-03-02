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
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ElevatedCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View>
        <ScrollView>
          <Text style={[styles.headingTextTwo, { marginTop: 5 }]}>
            Buy Yourself Everything
          </Text>
          <ScrollView horizontal={true} style={[styles.container]}>
            <View style={[styles.card, styles.cardElevated]}>
              <ImageBackground
                source={require("../../assets/card.png")}
                style={{
                  height: 120,
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.overlayText}>Car Showroom</Text>
              </ImageBackground>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text>Private Planes</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text>Private Yachts</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text>Clothes</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text>Watches</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
              <Text>Shoes</Text>
            </View>
            <Text>   </Text>
          </ScrollView>

          {/* Travel vehicals */}
          <View style={{ marginTop: 30 }}>
            <Text style={styles.headingTextTwo}>Your Travel</Text>
            <View style={styles.container}>
              <LinearGradient
                colors={["#00CCFF", "#007BA7"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
              >
                <View style={[styles.container]}>
                  <View style={[styles.cardTwo]}>
                    <TouchableOpacity style={styles.innerCard}>
                      <Image source={require("../../assets/images/car.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.innerCard}>
                      <Image
                        source={require("../../assets/images/plane.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.innerCard}>
                      <Image
                        source={require("../../assets/images/yacht.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>

          {/* Your Fashion */}
          <View style={{ marginTop: 30 }}>
            <Text style={styles.headingTextTwo}>Your Fashion</Text>
            <View style={[styles.container]}>
              <LinearGradient
                colors={["#00CCFF", "#007BA7"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
              >
                <View style={[styles.container]}>
                  <View style={styles.cardTwo}>
                    <TouchableOpacity style={styles.innerCard}>
                      <Image
                        source={require("../../assets/images/suit.png")}
                        style={{ width: 40, height: 50 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.innerCard}>
                      <Image
                        source={require("../../assets/images/watches.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.innerCard}>
                      <Image
                        source={require("../../assets/images/shoe.png")}
                        style={{ width: 40, height: 50 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View>
            {/* Collextions */}

            <View style={{ marginTop: 30 }}>
              <Text style={styles.headingText}>Collections</Text>
              <View style={styles.containerTwo}>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.cardThree,
                      styles.cardElevated,
                      { alignItems: "center", justifyContent: "center" },
                    ]}
                  >
                    <Text>Coins</Text>
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
                    <Text>Paintings</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.containerThree}>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.cardFour,
                      styles.cardElevated,
                      { alignItems: "center", justifyContent: "center" },
                    ]}
                  >
                    <Text>Sports memorabilia</Text>
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
                    <Text>Bags</Text>
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
                    <Text>Jewels</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Islands */}
            <View style={styles.seperator}>
              <View style={styles.containerThree}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 50,
                    marginLeft: 100,
                    marginRight: 100,
                  }}
                >
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "black" }}
                  />
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "black" }}
                  />
                </View>
                <TouchableOpacity>
                  <View>
                    <View
                      style={[
                        styles.cardFour,
                        styles.cardElevated,
                        {
                          justifyContent: "flex-end",
                        },
                      ]}
                    >
                      <View style={styles.container}>
                        <View
                          style={[
                            styles.cardTwo,
                            {
                              flexDirection: "column",
                              alignItems: "center",
                            },
                          ]}
                        >
                          <Image
                            source={require("../../assets/images/car.png")}
                          />
                          <Text>Islands</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginLeft: 12,
    marginBottom: 10,
  },
  seperator: {
    marginTop: 50,
  },
  cardThree: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardFour: {
    height: 180,
    width: 340,
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
    marginLeft: 12,
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
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 130,
    borderRadius: 8,
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
