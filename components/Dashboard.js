import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default function Dashboard({ navigation }) {
  return (
    <View style={styles.dash}>
      <Text style={styles.dashtxt}>There is the Dashboard page !</Text>
      <View style={styles.gosetting} >
        <Button title="Settings" color={"white"} onPress={()=> navigation.jumpTo("Settings")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dash : {
    display : "flex",
    alignItems : "center",
    justifyContent : 'center',
    height : '100%'
  },
  dashtxt : {
    fontSize : 16,
    fontWeight : "bold"
  },
  gosetting : {
    backgroundColor: "rgb(22, 123, 205)",
    borderRadius: 5,
    marginTop: 10,
  }
});
