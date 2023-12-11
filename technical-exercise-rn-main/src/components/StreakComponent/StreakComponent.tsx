import React from "react";
import { View, Text } from "react-native";
import { styles } from "./StreakComponent.styles";
import { StreakComponentProps } from "./StreakComponent.types";
import SingleStreak from "../SingleStreak/SingleStreak";
import { daysOfWeek } from "../../constants";
import { commonStyles, projectPalette } from "../../styles/projectPallete";
import { LinearGradient } from "expo-linear-gradient";

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

  const renderStreak = () => {
    const currentStreak = streak.filter(Boolean);
    const currentStreakLength = currentStreak.length;
    let renderedDaysCount = currentStreakLength % 7;

    const startingDayIndex: number = getStartingDayIndex();
    const reshuffledDays: string[] = [
      ...daysOfWeek.slice(startingDayIndex),
      ...daysOfWeek.slice(0, startingDayIndex),
    ];

    return reshuffledDays.map((day: string, index: number) => {
      const isCurrentDay: boolean =
        index === (new Date().getDay() + 7 - startingDayIndex) % 7;
      const hasStreak: boolean =
        index < renderedDaysCount || (renderedDaysCount === 1 && index === 0);
      const isPerfectWeek =
        (currentStreakLength / 7) % 1 === 0 && index < renderedDaysCount;

      return (
        <SingleStreak
          key={index}
          hasStreak={hasStreak}
          isCurrentDay={isCurrentDay}
          isPerfectWeek={isPerfectWeek}
        />
      );
    });
  };

  const reshuffledDays: string[] = (() => {
    const startingDayIndex: number = getStartingDayIndex();
    return [
      ...daysOfWeek.slice(startingDayIndex),
      ...daysOfWeek.slice(0, startingDayIndex),
    ];
  })();

  return (
    <View style={styles.container}>
      <View style={styles.daysOfWeekWrapper}>
        {reshuffledDays.map((day: string, index: number) => (
          <View style={styles.dayContainer} key={index}>
            <Text style={commonStyles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      {isPerfectStreak ? (
        <LinearGradient
          colors={projectPalette.perfectStreakGradient}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={styles.streak}>{renderStreak()}</View>
        </LinearGradient>
      ) : (
        <View style={styles.streak}>{renderStreak()}</View>
      )}
    </View>
  );
};

export default StreakComponent;
