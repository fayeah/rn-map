import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button, Platform, Linking } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeScreen() {
  const openMap = () => {
    const latLng = '30.210141,114.920580';
    const address = 'Tieshan District, Huangshi, Hubei, China';
    const daddr = latLng ? encodeURIComponent(latLng) : encodeURIComponent(address);
    if (Platform.OS === "ios") {
      Linking.openURL(`http://maps.apple.com/?daddr=${daddr}&sll=${latLng}`);
    } else {
      Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${daddr}`);
    }
  }

  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button
    title="Open Map"
    onPress={() => openMap()}
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
