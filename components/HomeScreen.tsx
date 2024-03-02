import {
    Image,
    ImageBackground,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
  } from "react-native";
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { useRouter } from "expo-router";
  
  const HomeScreen = () => {
    const router = useRouter();
    return (
      <>
        
        <View style={{ backgroundColor: "#fff", flex:1 }}>
          <View>
            <ScrollView>
              <View style={[styles.containerThree, {paddingTop: 20}]}>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.cardFour,
                      styles.cardElevated,
  
                      {
                        paddingLeft: 20,
                        alignItems: "flex-start",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <Text>$ 13,879,011,298.60</Text>
                    <Text style={{ color: "green" }}>Total Income per hour</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.containerThree}>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.cardFour,
                      styles.cardElevated,
  
                      {
                        paddingLeft: 20,
                        alignItems: "flex-start",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <Text>25,000,000</Text>
                    <Text style={{ color: "red" }}>Total Expense per hour</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.containerThree}>
                  <TouchableOpacity
                    onPress={() => router.push("/createBusinesses")}
                  >
                    <View
                      style={[
                        styles.cardSix,
  
                        {
                          backgroundColor: "#1F75FE",
  
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      <Text style={{ color: "white", letterSpacing: 0.3 }}>
                        Start a business
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.containerThree}>
                  <TouchableOpacity onPress={() => router.push("/buyBusinesses")}>
                    <View
                      style={[
                        styles.cardSix,
                        styles.cardElevated,
                        {
                          backgroundColor: "#F5F5F5",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      <Text style={{ color: "black", letterSpacing: 0.3 }}>
                        Buy businesses
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
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
      height: 100,
      width: 340,
      borderRadius: 10,
      marginVertical: 12,
      marginHorizontal: 10,
    },
    cardSix: {
      height: 50,
      // width: 120,
      borderRadius: 10,
      marginVertical: 12,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      // marginHorizontal: 10,
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
      flex: 1,
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
      elevation: 4,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    gradient: {
      flex: 1,
      borderRadius: 35,
      elevation: 4,
    },
  });
  
  export default HomeScreen;
  