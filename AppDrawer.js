import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
        //   drawerContentStyle: {
        //     backgroundColor: "#e8e4",
        //   },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard Screen",
            // drawerActiveTintColor : "#333",
            // drawerActiveBackgroundColor : "lightblue",
          }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
