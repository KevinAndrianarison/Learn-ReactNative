import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  ActivityIndicator,
} from "react-native";

export default function About({ route }) {
  const { data } = route.params;
  const [isVisible, setIsvisible] = useState(false);
  const [isIndicator, setIsindicator] = useState(false);


  return (
    <View style={styles.about}>
      <Text>
        This is the about screen of {data.description} since {data.age}
      </Text>
      <View style={styles.showmodal}>
        <Button
          style={styles.showmodal}
          title="Show modal"
          color={"white"}
          onPress={() => setIsvisible(true)}
        />
      </View>
      <View style={styles.showmodal}>
        <Button title="Show indicator" color={"white"} onPress={()=> setIsindicator(!isIndicator)} />
      </View>
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsvisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={styles.modal}>
          <Text>This is the modal ! </Text>
          <View style={styles.modalbtn}>
            <Button title="Fermer" onPress={() => setIsvisible(false)} />
          </View>
        </View>
      </Modal>
      {isIndicator && <ActivityIndicator style={[styles.indicator, StyleSheet.absoluteFill]} size="large" color={"rgb(22, 123, 205)666"}  />}
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    marginTop: 20,
    alignItems: "center",
  },
  indicator : {
    marginTop: "70%",
    zIndex : 2
  },
  modal: {
    marginTop: "80%",
    alignItems: "center",
  },
  modalbtn: {
    borderColor: "rgb(22, 123, 205)",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  showmodal: {
    backgroundColor: "rgb(22, 123, 205)",
    borderRadius: 5,
    marginTop: 10,
  },
});
