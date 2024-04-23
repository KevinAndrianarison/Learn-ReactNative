import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/About";
import { Pressable, Text, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          // contentStyle: {
          //   backgroundColor: "#e8e4",
          // },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "MyApp",
            headerRight: () => (
              <Pressable onPress={() => console.log("This is the menu !")}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
