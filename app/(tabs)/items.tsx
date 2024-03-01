import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <ImageBackground
              source={require("../../assets/card.png")}
              style={{
                height: 100,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.overlayText}>Hello</Text>
            </ImageBackground>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Lilly</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Hi</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>how</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>are</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>you?</Text>
          </View>
        </ScrollView>

{/* Travel vehicals */}

        <Text style={styles.headingText}>Your Travel</Text>
        <View style={styles.container}>
          <View style={[styles.cardTwo, styles.cardElevated]}>
            <TouchableOpacity style={styles.innerCard}>
              <Image source={require("../../assets/images/car.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerCard}>
              <Image source={require("../../assets/images/plane.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerCard}>
              <Image source={require("../../assets/images/yacht.png")} />
            </TouchableOpacity>
          </View>
        </View>

{/* Your Fashion */}

        <Text style={styles.headingText}>Your Fashion</Text>
        <View style={styles.container}>
          <View style={[styles.cardTwo, styles.cardElevated]}>
            <TouchableOpacity style={styles.innerCard}>
              <Image source={require("../../assets/images/suit.png")} style={{width:40, height:50}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerCard}>
              <Image source={require("../../assets/images/watches.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerCard}>
              <Image source={require("../../assets/images/car.png")} />
            </TouchableOpacity>
          </View>
        </View>
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
  card: {
    flex: 1,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
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
    paddingBottom:4,
    paddingTop:4,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    // backgroundColor:"#fff"
    // height: 100,
    // width: 100,
    // borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: "#CAD5E2",
    elevation: 8,
  },
});
