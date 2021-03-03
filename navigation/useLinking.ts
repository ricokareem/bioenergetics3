import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      screens: {
        Main: "main",
        Cards: "cards",
        ReferenceGuide: "referenceGuide",
        Info: "info",
      },
    },
  });
}