import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import MainScreen from '../screens/MainScreen';
import CardsScreen from '../screens/CardScreen';
import ReferenceGuideScreen from '../screens/ReferenceGuideScreen';
import BalancingScreen from '../screens/BalancingScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Main';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        navigation={navigation}
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
        name="ReferenceGuide"
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
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Main':
      return 'Home';
    case 'Cards':
      return 'Card Stack';
    case 'ReferenceGuide':
      return 'Symptoms Reference';
    case 'Balancing':
      return 'Balancing';
  }
}
