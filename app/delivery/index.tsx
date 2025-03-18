import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
