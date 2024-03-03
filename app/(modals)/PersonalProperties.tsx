import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyTabs from "../TabsFive";

const business = () => {
  return (
    <>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <MyTabs />
      </View>
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

export default business;
