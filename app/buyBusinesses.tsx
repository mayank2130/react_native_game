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
import { useNavigation, useRouter } from "expo-router";
import { buyBusinesses } from "@/constants/BuyBusiness";

export default function ElevatedCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose a new business",
      // headerTransparent: true,
    });
  }, []);
  const router = useRouter();
  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <ScrollView>
          <View style={{ marginTop: 30 }}>
            {buyBusinesses.reduce((pairs, businessType, index) => {
              if (index % 2 === 0) {
                pairs.push(
                  // @ts-ignore
                  <View key={index} style={styles.containerTwo}>
                    <TouchableOpacity
                      onPress={() => router.push(businessType.onPress())}
                    >
                      <View
                        style={[
                          styles.cardThree,
                          styles.cardElevated,
                          { alignItems: "center", justifyContent: "center" },
                        ]}
                      >
                        <ImageBackground
                          source={businessType.source}
                          style={{
                            height: 60,
                            width: 60,
                            borderRadius: 25,
                            margin: 6,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                        <Text style={styles.innerTxt}>{businessType.name}</Text>
                      </View>
                    </TouchableOpacity>

                    {index + 1 < buyBusinesses.length && (
                      <TouchableOpacity
                        onPress={() =>
                          router.push(buyBusinesses[index + 1].onPress())
                        }
                      >
                        <View
                          style={[
                            styles.cardThree,
                            styles.cardElevated,
                            { alignItems: "center", justifyContent: "center" },
                          ]}
                        >
                          <ImageBackground
                            source={buyBusinesses[index + 1].source}
                            style={{
                              height: 60,
                              width: 60,
                              borderRadius: 25,
                              margin: 6,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Text style={styles.innerTxt}>
                            {buyBusinesses[index + 1].name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              }

              return pairs;
            }, [])}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  innerTxt: {
    fontFamily: "mon-sb",
  },
  cardThree: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  containerTwo: {
    flexDirection: "row",
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
