import { StyleSheet } from "react-native";



export const homeStyle = StyleSheet.create({
    center: {
      height: 300,
      flexDirection: "row",
      marginTop: 20,
    },
    ul: {
      width: 100,
      marginTop: 10,
      height: 50,
      backgroundColor: "rgba(255, 255, 5, 0.591)",
      paddingTop: 15,
      borderRadius: 5,
      marginHorizontal: 10,
    },
  
    li: {
      textAlign: "center",
      color: "rgba(0, 0, 0, 0.68)",
    },
  
    valeur: {
      height: 50,
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      paddingLeft: 20,
      paddingTop: 10,
    },
    namecontainer: {
      marginBottom: 15,
      fontSize: 18,
      fontWeight: "bold",
    },
    inputContainer: {
      paddingLeft: 20,
    },
    name: {
      color: "gray",
    },
    buttonContainer: {
      marginTop: 15,
      borderWidth: 1,
      borderColor: "rgb(22, 123, 205)",
      borderRadius: 5,
      width: 100,
      marginLeft: 20,
      fontWeight: "bold",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingHorizontal: 5,
    },
    input: {
      color: "gray",
      borderWidth: 1,
      width: 300,
      borderRadius: 5,
      height: 40,
      paddingLeft: 10,
      marginTop: 5,
      borderColor: "gray",
      paddingTop: 10,
    },
  });
  