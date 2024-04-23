import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { homeStyle } from "../styles/HomeStyle";

export default function Home({ navigation }) {
  const [descri, setText] = useState("");
  const [list, setList] = useState([
    {
      nom: "Vuejs",
      age: 21,
      id: 1,
    },
    {
      nom: "ReactJs",
      age: 25,
      id: 2,
    },
    {
      nom: "Flutter",
      age: 30,
      id: 3,
    },
    {
      nom: "React Native",
      age: 30,
      id: 4,
    },
  ]);

  function Verify() {
    if (descri === "") {
      Alert.alert("Attention !", "Veillez remplir le champs .", [
        {
          text: "D'accord",
          onPress: () => {
            console.log("Fermer");
          },
        },
      ]);
    }
    let listTemporaire = list;
    listTemporaire.push({
      nom: descri,
      age: 5,
      id: Math.random(),
    });
    setList(listTemporaire);
    console.log(descri);
    navigation.navigate("About", {
      data: {
        description: descri,
        age: 10,
      },
    });
    setText("");
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <View style={homeStyle.valeur}>
          <Text style={homeStyle.namecontainer}>
            Voici la description saisie :
            <Text style={homeStyle.name}> {descri}</Text>
          </Text>
        </View>
        <View style={homeStyle.inputContainer}>
          <Text>Votre description :</Text>
          <TextInput
            multiline
            style={homeStyle.input}
            placeholder="Ecrire ici... "
            onChangeText={(val) => setText(val)}
            value={descri}
          />
        </View>
        <View style={homeStyle.buttonContainer}>
          <AntDesign name="checkcircleo" size={20} color="rgb(22, 123, 205)" />
          <Button onPress={Verify} title="Valider !" />
        </View>
        <View style={homeStyle.center}>
          <FlatList
            numColumns={3}
            keyExtractor={(item) => item.id}
            data={list}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setText(item.nom);
                }}
              >
                <View style={homeStyle.ul}>
                  <Text style={homeStyle.li}>{item.nom}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
