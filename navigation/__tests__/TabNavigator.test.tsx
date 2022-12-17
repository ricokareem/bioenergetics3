import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import TabNavigator from "../TabNavigator";

import "react-native-gesture-handler/jestSetup";
import { Platform } from "react-native";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("<TabNavigator>", () => {
  const setOptionsMock = () => jest.fn;

  beforeEach(() => {
    const component = (
      <NavigationContainer>
        <TabNavigator
          route={{ key: "Root-KX6PLDEvRrFwuz-Hep-ev", name: "Root" }}
          navigation={
            {
              setOptions: setOptionsMock,
              routes: ["Home", "ReferenceGuide"],
            } as NavigationProp
          }
        />
      </NavigationContainer>
    );

    render(component);
  });

  test("screen contains bottom nav buttons", async () => {
    //
    // TODO: fix this test for android 🤷
    //
    if (Platform.OS === "android") {
      expect(screen.getAllByText("Home"));
      expect(screen.getAllByText("Card Stack"));
      expect(screen.getAllByText("Symptoms"));
      expect(screen.getAllByText("Info"));
    } else {
      expect(screen.getByText("Home"));
      expect(screen.getByText("Card Stack"));
      expect(screen.getByText("Symptoms"));
      expect(screen.getByText("Info"));
    }
  });

  test("clicking on a button takes you to the screen", async () => {
    //
    // TODO: fix this test for android 🤷
    //
    if (Platform.OS === "ios") {
      await act(async () => {
        fireEvent.press(screen.getByText("Symptoms"));
      });

      expect(screen.getByText("Thyroid"));
      expect(screen.getByText("Dementia"));
    }
  });
});
