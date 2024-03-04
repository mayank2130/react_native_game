import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
// import { ShopPrice, shopPrice } from "@/constants/CreateBusiness";
import { FactoryPrice, factoryPrice } from "@/constants/CreateBusiness";

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose the type of shop",
      // headerTransparent: true,
    });
  }, []);

  const router = useRouter();

  const handleStartBusiness = (selectedPrice: FactoryPrice) => {
    navigation.navigate("(modals)/BusinessName", { selectedPrice });
  };

  return (
    <>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View>
          <ScrollView>
            {factoryPrice.map((item) => (
              <View
                key={item.id}
                style={[styles.containerThree, { paddingTop: 20 }]}
              >
                <TouchableOpacity onPress={() => handleStartBusiness(item)}>
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
                    <Text style={[styles.innerTxt, { paddingBottom: 10 }]}>
                      {item.name}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <Text style={{ color: "red", fontFamily: "mon" }}>
                        Cost :
                      </Text>
                      <Text
                        style={{
                          color: "red",
                          fontFamily: "mon-b",
                          letterSpacing: 1,
                        }}
                      >
                        $ {item.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
            <View style={{ flex: 1, flexDirection: "row" }}></View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  innerTxt: {
    fontFamily: "mon-sb",
  },
  cardFour: {
    height: 100,
    width: 340,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  containerThree: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }, 
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default HomeScreen;
