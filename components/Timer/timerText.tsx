import * as React from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

// const ViewPropTypesStyle = ViewPropTypes
//   ? ViewPropTypes.style
//   : View.propTypes.style;

const styles = StyleSheet.create({
  textBase: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

type Props = {
  active: boolean;
  isPausable?: boolean;
  timeDisplay: number;
  onTimeElapsed: any;
  reverseCount: boolean;
  seconds: number;
  startAt: number;
  subTextStyle: Text | Array<Text>;
  textStyle: Text | Array<Text>;
};

type Default = {
  active: boolean;
  isPausable: boolean;
  timeDisplay: number;
  onTimeElapsed: any;
  seconds: number;
  startAT: number;
  subTextStyle?: Text | Array<Text>;
  textStyle?: Text | Array<Text>;
};

type State = {
  active: boolean;
  reverseCount: boolean;
  timeProgress: any;
  timeText: string;
  timeReverse: any;
  time: any;
};

const secondsToHms = (rd: number): string => {
  const d = Number(rd);
  // const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  // const hDisplay = h > 0 ? h : '';
  const mDisplay = m > 9 ? m : `0${m}`;
  const sDisplay = s > 9 ? s : `0${s}`;
  return `${mDisplay}:${sDisplay}`;
};

export default class TextTimeComponent extends React.Component<
  Default,
  Props,
  State
> {
  renderSubText() {
    const { active, isPausable, subTextStyle } = this.props;

    if (isPausable) {
      return (
        <Text
          numberOfLines={1}
          ellipsizeMode="head"
          style={[subTextStyle, active ? { opacity: 0.8 } : { opacity: 1 }]}
        >
          {active ? "Pause" : "Resume"}
        </Text>
      );
    }

    return <View />;
  }

  render() {
    const { active, textStyle, timeDisplay } = this.props;

    return (
      <View style={styles.textBase}>
        <Text
          numberOfLines={1}
          ellipsizeMode="head"
          style={[textStyle, active ? { opacity: 1 } : { opacity: 0.8 }]}
        >
          {secondsToHms(timeDisplay)}
        </Text>
        {this.renderSubText()}
      </View>
    );
  }
}
