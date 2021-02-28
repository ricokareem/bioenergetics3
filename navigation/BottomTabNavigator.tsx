import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import CardsScreen from "../screens/CardScreen";
import ReferenceGuideScreen from "../screens/ReferenceGuideScreen";
import InfoScreen from "../screens/InfoScreen";
import Colors from "../constants/Colors";

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

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator(
  props: BottomTabScreenProps<any, any>
) {
  const { navigation, route } = props;
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
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
      <BottomTab.Screen
        name="Cards"
        component={CardsScreen}
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
      <BottomTab.Screen
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
      <BottomTab.Screen
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
    </BottomTab.Navigator>
  );
}
