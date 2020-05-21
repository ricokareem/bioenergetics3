import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import MainScreen from '../screens/MainScreen';
import CardsScreen from '../screens/CardScreen';
import ReferenceGuideScreen from '../screens/ReferenceGuideScreen';
import BalancingScreen from '../screens/BalancingScreen';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          title: 'Card Stack',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-images" />,
        }}
      />
      <BottomTab.Screen
        name="Reference Guide"
        component={ReferenceGuideScreen}
        options={{
          title: 'Symptoms Reference',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-thermometer" />,
        }}
      />
      <BottomTab.Screen
        name="Balancing"
        component={BalancingScreen}
        options={{
          title: 'Balancing',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-body" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Main':
      return 'Home';
    case 'Cards':
      return 'Card Stack';
    case 'Reference Guide':
      return 'Symptoms Reference';
    case 'Balancing':
      return 'Balancing';
    // case 'Links':
    //   return 'Links to learn more';
  }
}
