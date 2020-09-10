import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeScreen({navigation}) {
  return <Button title="Home screen" onPress={() => navigation.navigate('Profile', { name: 'Jane' })}></Button>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
