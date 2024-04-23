import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Details() {
  return (
    <View style={styles.details}>
      <Text style={styles.detailstxt}>There is the Details page !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  detailstxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
