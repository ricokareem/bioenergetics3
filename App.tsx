/* eslint-disable global-require */

import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import MediaScreen from "./screens/MediaScreen";
import HowToUseAppScreen from "./screens/HowToUseAppScreen";
import BeginningHealingSessionScreen from "./screens/BeginningHealingSessionScreen";
import AboutHealingTechniques from "./screens/AboutHealingTechniques";
import AboutRoland from "./screens/AboutRoland";
import Disclaimer from "./screens/Disclaimer";
import Social from "./screens/Social";
import Credits from "./screens/Credits";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
    ...Feather.font,
    // "SpaceMono-Regular": require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="MediaScreen" component={MediaScreen} />
            <Stack.Screen
              name="HowToUseAppScreen"
              component={HowToUseAppScreen}
            />
            <Stack.Screen
              name="BeginningHealingSessionScreen"
              component={BeginningHealingSessionScreen}
            />
            <Stack.Screen
              name="AboutHealingTechniques"
              component={AboutHealingTechniques}
            />
            <Stack.Screen name="AboutRoland" component={AboutRoland} />
            <Stack.Screen name="Disclaimer" component={Disclaimer} />
            <Stack.Screen name="Social" component={Social} />
            <Stack.Screen name="Credits" component={Credits} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
