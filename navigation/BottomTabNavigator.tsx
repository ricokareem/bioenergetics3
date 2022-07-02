import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  NavigationProp,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ReactElement } from "react";
import MainScreen from "../screens/MainScreen";
import CardStackScreen from "../screens/CardStackScreen";
import ReferenceGuideScreen from "../screens/ReferenceGuideScreen";
import InfoScreen from "../screens/InfoScreen";
import Colors from "../constants/Colors";

type PropType = {
  navigation: NavigationProp<any, string>;
  route: RouteProp<any, any>;
};

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

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ navigation, route }: PropType): ReactElement {
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
            <Feather
              name="home"
              size={30}
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
            <Feather
              name="layers"
              size={30}
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
            <Feather
              name="book-open"
              size={30}
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
            <Feather
              name="info"
              size={30}
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

export default BottomTabNavigator;
