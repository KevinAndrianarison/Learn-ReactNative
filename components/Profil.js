import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Profil() {
  return (
    <View style={styles.profil}>
      <Text style={styles.profiltxt}>There is the Profil page !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profil: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  profiltxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
