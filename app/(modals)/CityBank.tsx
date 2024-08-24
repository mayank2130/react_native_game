import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { router, useNavigation } from "expo-router";
import { useBalance } from "@/Redux/BalanceContext";

const CityBank = () => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);
  const { balance, increaseBalance } = useBalance();
  const getLoan = (amount: number) => {
    increaseBalance(amount);
    router.push("/(tabs)/earnings");
  };
  const priceOptions = [
    { amount: 250000, interest: "5%", returnTime: "within 1 month" },
    { amount: 500000, interest: "7%", returnTime: "within 3 months" },
    { amount: 750000, interest: "8%", returnTime: "within 6 months" },
    { amount: 1000000, interest: "10%", returnTime: "within 1 year" },
  ];

  return (
    <>
      <ScrollView style={{ maxHeight: "auto", flex: 1 }}>
        <View
          style={{
            paddingTop: 160,
            backgroundColor: "#333C4B",
            position: "relative",
          }}
        >
          <View style={[styles.containerTwo]}>
            <View
              style={[
                styles.cardThree,
                styles.cardElevated,
                {
                  position: "absolute",
                  top: -80,
                  // left: "auto",
                  right: 95,
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <ImageBackground
                source={require("../../assets/images/bank.png")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 25,
                  margin: 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></ImageBackground>
              <Text style={styles.innerTxt}>City Bank</Text>
            </View>
          </View>
        </View>
        <View style={[styles.containerThree, { marginTop: 150 }]}>
          <View style={[styles.containerThree, {marginBottom: 20}]}>
            <Text
              style={[
                styles.overlayText,
                { letterSpacing: 1, fontFamily: "mon-l" },
              ]}
            >
              Bank calculates the risk of giving you a loan and sets the
              interest rate accordingly.
            </Text>
          </View>

          {priceOptions.map((price, index) => (
            <View style={{ marginTop: 20 }} key={index}>
              <View>
                <View
                  style={[
                    styles.cardFour,
                    {
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      backgroundColor: "#fff",
                      borderRadius: 20,
                      paddingLeft: 20,
                    },
                  ]}
                >
                  <Text style={[styles.innerTxt, { color: "green" }]}>
                    ${price.amount.toLocaleString()}
                  </Text>
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      paddingTop: 13,
                    }}
                  >
                    <Text style={styles.overlayText}>
                      At {price.interest} interest
                    </Text>
                    <Text style={{ fontFamily: "mon-l", paddingTop: 5 }}>
                      Return {price.returnTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 30,
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.containerThree}>
                        <Pressable>
                          <View
                            style={[
                              styles.cardSix,
                              {
                                backgroundColor: "#9F8170",
                                paddingLeft: 33,
                                paddingRight: 33,
                                alignItems: "center",
                                justifyContent: "center",
                              },
                            ]}
                          >
                            <Text
                              style={{
                                color: "white",
                                letterSpacing: 0.3,
                                fontFamily: "mon-sb",
                              }}
                            >
                              No Deal
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                      <View style={styles.containerThree}>
                        <Pressable onPress={() => getLoan(price.amount)}>
                          <View
                            style={[
                              styles.cardSix,
                              styles.cardElevated,
                              {
                                backgroundColor: "#03C03C",
                                paddingLeft: 42,
                                paddingRight: 42,
                                alignItems: "center",
                                justifyContent: "center",
                              },
                            ]}
                          >
                            <Text
                              style={{
                                color: "white",
                                letterSpacing: 0.3,
                                fontFamily: "mon-sb",
                              }}
                            >
                              Deal
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default CityBank;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginLeft: 12,
    marginBottom: 10,
  },
  cardSix: {
    height: 50,
    borderRadius: 10,
    marginVertical: 12,
    // padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  innerTxt: {
    fontFamily: "mon-sb",
    marginTop: 20,
    fontSize: 20,
  },
  cardThree: {
    width: 200,
    height: 180,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardFour: {
    height: 230,
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
