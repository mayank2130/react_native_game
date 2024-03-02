import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyTabs from "../TabsTwo";

const profile = () => {
  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <Text style={[styles.headingTextTwo, { marginTop: 40 }]}>
          Profile{" "}
        </Text>
      </View>
      <MyTabs />
    </>
  );
};

const styles = StyleSheet.create({
  headingTextTwo: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginBottom: 10,
  },
});

export default profile;
