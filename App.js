import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profil from "./components/Profil";
import Details from "./components/Details";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // tabBarShowLabel : false,
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="person" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="details" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
