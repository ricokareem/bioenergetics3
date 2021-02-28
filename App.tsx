/* eslint-disable global-require */

import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
// import { SplashScreen } from 'expo';
// import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";

import CardMedia from "./screens/CardMedia";
import ReferenceGuideMedia from "./screens/ReferenceGuideMedia";
import HowToUseAppScreen from "./screens/HowToUseAppScreen";
import BeginningHealingSessionScreen from "./screens/BeginningHealingSessionScreen";
import AboutHealingTechniques from "./screens/AboutHealingTechniques";
import AboutRoland from "./screens/AboutRoland";
import Disclaimer from "./screens/Disclaimer";
import Social from "./screens/Social";
import Credits from "./screens/Credits";

type AppProps = {
  skipLoadingScreen: any;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Stack = createStackNavigator();

const App = (props: AppProps) => {
  const { skipLoadingScreen } = props;
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  // const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHide();

        // Load our initial navigation state
        // setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  }
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <NavigationContainer
        ref={containerRef}
        initialState={initialNavigationState}
      >
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="CardMedia" component={CardMedia} />
          <Stack.Screen
            name="ReferenceGuideMedia"
            component={ReferenceGuideMedia}
          />
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
  );
};

export default App;
