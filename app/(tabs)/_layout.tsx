import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
        // headerTitle:"",
        tabBarStyle: { paddingBottom: 7, height: 56, gap: 1 },
      }}
    >
      {/* <Tabs.Screen
        name="investing"
        options={{
          tabBarLabel: "Investing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={24} color="black" />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="business"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarLabel: "Business",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="building-columns" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="earnings"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarLabel: "Earnings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-check-dollar" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          tabBarLabel: "Items",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-sport" size={24} color="black" />
          ),
          headerTitle: "Items",
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
