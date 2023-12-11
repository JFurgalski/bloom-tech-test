import React from "react";
import { View, Text } from "react-native";
import { styles } from "./StreakComponent.styles";
import { StreakComponentProps } from "./StreakComponent.types";
import SingleStreak from "../SingleStreak/SingleStreak";

const StreakComponent: React.FC<StreakComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <SingleStreak isCurrentDay={true} isPerfectWeek={false} hasStreak={true} />
      <Text>I am the streak component</Text>
    </View>
  );
};

export default StreakComponent;
