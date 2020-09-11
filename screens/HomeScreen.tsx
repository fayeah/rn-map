import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeScreen({navigation}) {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button
    title="Go to Help"
    onPress={() => navigation.navigate('Help')}
  />
</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
