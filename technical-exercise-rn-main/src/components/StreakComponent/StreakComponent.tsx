import React from "react";
import { View, Text } from "react-native";
import { styles } from "./StreakComponent.styles";
import { StreakComponentProps } from "./StreakComponent.types";
import SingleStreak from "../SingleStreak/SingleStreak";

const StreakComponent: React.FC<StreakComponentProps> = ({ streak }) => {
  const isFilleDaysCount = streak.filter(Boolean).length;
  const isPerfectStreak = isFilleDaysCount === 7;

  const getStartingDayIndex = (): number => {
    if (StreakComponent.length > 0) {
      const startDate = new Date(streak[0]);
      return startDate.getDate();
    }
    return 0;
  };

  return (
    <View style={styles.container}>
      <View></View>
      <SingleStreak isCurrentDay={true} isPerfectWeek={true} hasStreak={true} />
    </View>
  );
};

export default StreakComponent;
