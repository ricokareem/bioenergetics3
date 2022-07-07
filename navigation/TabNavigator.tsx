import "react-native-gesture-handler";
import * as React from "react";
import { Platform } from "react-native";
import {
  NavigationProp,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { ReactElement } from "react";
import MainScreen from "../screens/MainScreen";
import CardStackScreen from "../screens/CardStackScreen";
import ReferenceGuideScreen from "../screens/ReferenceGuideScreen";
import InfoScreen from "../screens/InfoScreen";
import Colors from "../constants/Colors";

type TabNavigatorPropType = {
  navigation: NavigationProp<any, string>;
  route: RouteProp<any, any>;
};

const isAndroid = Platform.OS === "android";

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Main";

  switch (routeName) {
    case "Main":
      return "Home";
    case "Cards":
      return "Card Stack";
    case "ReferenceGuide":
      return "Symptoms Reference";
    case "Info":
      return "Info";
    default:
      return "Home";
  }
}

const Tab = isAndroid
  ? createMaterialBottomTabNavigator()
  : createBottomTabNavigator();

function TabNavigator({
  navigation,
  route,
}: TabNavigatorPropType): ReactElement {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={20}
              strokeWidth={1}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardStackScreen}
        options={{
          tabBarLabel: "Card Stack",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="grid-view"
              size={20}
              strokeWidth={1}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReferenceGuide"
        component={ReferenceGuideScreen}
        options={{
          tabBarLabel: "Symptoms",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="menu-book"
              size={20}
              strokeWidth={1}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="accessibility"
              size={20}
              strokeWidth={1}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
