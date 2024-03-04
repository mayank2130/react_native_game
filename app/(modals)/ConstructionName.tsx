import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { ConstructionPrice } from "@/constants/CreateBusiness";
  import { useNavigation } from "expo-router";
  import { useRoute } from "@react-navigation/native";
  
  const HomeScreen = () => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: "Choose the type of shop",
        // headerTransparent: true,
      });
    }, []);
    const navigation = useNavigation<any>();
    const route = useRoute();
  
    // Extract selectedPrice from the route parameters
    const routeParams = route.params as { selectedPrice?: ConstructionPrice };
    const selectedPrice: ConstructionPrice | undefined = routeParams?.selectedPrice;
  
    // const handleStartBusiness = () => {
    //   // Navigate to the "BusinessName" screen without passing parameters here
    //   navigation.navigate("", { selectedPrice });
    // };
  
    return (
      <View style={{ flex: 1, margin: 30 }}>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.headingText}>Enter Store Name</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <TextInput style={styles.input} placeholder="Type Here" />
        </View>
        <View style={{ marginVertical: 20, gap: 10 }}>
          <Text style={{ fontFamily: "mon", fontSize: 20 }}>
            Cost of Starting: $ {selectedPrice?.price}
          </Text>
        </View>
        <TouchableOpacity style={styles.btnStyle}>
          <View>
            <Text style={[styles.innerTxt, { color: "#ffffff" }]}>
              Start the Business
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
  });
  
  export default HomeScreen;
  