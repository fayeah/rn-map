import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <React.Fragment>
      <Text>Some text.</Text>
      <Text>A heading</Text>
      <Text>More text.</Text>
      <Text>Another heading</Text>
      <Text>Even more text.</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
