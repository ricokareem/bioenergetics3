import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import BottomTabNavigator from "../BottomTabNavigator";

import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("<BottomTabNavigator>", () => {
  const setOptionsMock = () => jest.fn;

  test("screen contains bottom nav buttons", async () => {
    const component = (
      <NavigationContainer>
        <BottomTabNavigator
          route={{ key: "Root-KX6PLDEvRrFwuz-Hep-ev", name: "Root" }}
          navigation={{ setOptions: setOptionsMock } as NavigationProp}
        />
      </NavigationContainer>
    );

    render(component);
    const homeButton = await screen.findByText("Home");
    const cardStackButton = await screen.findByText("Card Stack");
    const symptomsButton = await screen.findByText("Symptoms");
    const infoButton = await screen.findByText("Info");

    expect(homeButton);
    expect(cardStackButton);
    expect(symptomsButton);
    expect(infoButton);
  });

  test("clicking on a button takes you to the screen", async () => {
    const component = (
      <NavigationContainer>
        <BottomTabNavigator
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
    const oldScreen = screen.queryByText("Home");
    const button = await screen.getByText("Symptoms");

    expect(oldScreen);

    await act(async () => {
      fireEvent(button, "press");
      const ReferenceGuideLink1 = await screen.findByText("Neck Pain");
      const ReferenceGuideLink2 = await screen.findByText("Thyroid");
      const ReferenceGuideLink3 = await screen.findByText("Dementia");

      expect(ReferenceGuideLink1);
      expect(ReferenceGuideLink2);
      expect(ReferenceGuideLink3);
    });
  });
});
