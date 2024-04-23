import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Settings() {
  return (
    <View style={styles.settings}>
      <Text style={styles.settingstxt}>There is the setting page !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  settings : {
    display : "flex",
    alignItems : "center",
    justifyContent : 'center',
    height : '100%'
  },
  settingstxt : {
    fontSize : 16,
    fontWeight : "bold"
  }
});
