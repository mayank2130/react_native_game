import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ShopPrice } from "@/constants/CreateBusiness";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { loadCompanyList, useCompany } from "@/Redux/NameContext";
import { useBalance } from "@/Redux/BalanceContext";

const HomeScreen = () => {
  const { deductBalance } = useBalance();

  const navigation = useNavigation<any>();
  const route = useRoute();

  const routeParams = route.params as { selectedPrice?: ShopPrice };
  const selectedPrice: ShopPrice | undefined = routeParams?.selectedPrice;

  const [printedText, setPrintedText] = useState("");

  const { updateCompanyList, companyList } = useCompany();

  const handleButtonPress = () => {
    const itemPrice = Number(selectedPrice?.price);
    deductBalance(itemPrice);
// @ts-ignore
    updateCompanyList(printedText).then(() => {
      setPrintedText("");
      navigation.navigate("Home");
    });
  };

  return (
    <View style={{ flex: 1, margin: 30 }}>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.headingText}>Enter Company Name</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <TextInput
          style={styles.input}
          value={printedText}
          onChangeText={(text) => setPrintedText(text)}
          placeholder="Type Here"
        />
      </View>
      <View style={{ marginVertical: 20, gap: 10 }}>
        <Text style={{ fontFamily: "mon", fontSize: 20 }}>
          Cost of Starting: $ {selectedPrice?.price}
        </Text>
      </View>
      <TouchableOpacity onPress={handleButtonPress} style={styles.btnStyle}>
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
