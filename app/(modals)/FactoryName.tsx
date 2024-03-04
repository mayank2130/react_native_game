import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { useRouter } from "expo-router";
  import { useNavigation } from "expo-router";
  
  const HomeScreen = () => {
    const navigation = useNavigation();
  
    const [text, onChangeText] = React.useState("");
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: "",
        // headerTransparent: true,
      });
    }, []);
    const router = useRouter();
    return (
      <>
        <View style={{ flex: 1, margin: 30 }}>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.headingText}>Enter Factory Name</Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Type Here"
            />
          </View>
          <View style={{ marginVertical: 20, gap: 10 }}>
            <Text style={{ fontFamily: "mon", fontSize: 20 }}>
              Cost of Starting:
            </Text>
            <Text style={styles.innerTxt}>$ 75,000</Text>
          </View>
          <TouchableOpacity style={styles.btnStyle}>
            <View>
              <Text style={[styles.innerTxt, {color: "#ffffff"}]}>Start the Business</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontFamily: "mon-b",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    btnStyle: {
      borderRadius: 10,
      backgroundColor: "#79443B",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    innerTxt: {
      fontFamily: "mon-sb",
      fontSize: 20,
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
  