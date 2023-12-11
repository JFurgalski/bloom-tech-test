import React from "react";
import { Text, View } from "react-native";
import SingleStreak from "../SingleStreak/SingleStreak";
import { styles } from "./StreakComponent.styles";
import { daysOfWeek } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles, projectPalette } from "../../styles/projectPallete";
import { StreakComponentProps } from "./StreakComponent.types";

const StreakComponent: React.FC<StreakComponentProps> = ({ streak }) => {
  const filledDaysCount = streak.filter(Boolean).length;
  const isPerfectStreak = filledDaysCount === 7;

  const getStartingDayIndex = (): number => {
    if (streak.length > 0) {
      const startDate = new Date(streak[0]);
      return startDate.getDay();
    }
    return 0;
  };

  const renderStreak = () => {
    const currentStreak = streak.filter(Boolean);
    const currentStreakLength = currentStreak.length;
    let renderedDaysCount = currentStreakLength % 7;

    const startingDayIndex: number = getStartingDayIndex();
    const adjustedDaysOfWeek: string[] = [
      ...daysOfWeek.slice(startingDayIndex),
      ...daysOfWeek.slice(0, startingDayIndex),
    ];

    renderedDaysCount = renderedDaysCount === 0 ? 7 : renderedDaysCount;

    return adjustedDaysOfWeek.map((day: string, index: number) => {
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

  const reshuffleDays: string[] = (() => {
    const startingDayIndex: number = getStartingDayIndex();
    return [
      ...daysOfWeek.slice(startingDayIndex),
      ...daysOfWeek.slice(0, startingDayIndex),
    ];
  })();

  return (
    <View style={styles.container}>
      <View style={styles.daysOfWeekWrapper}>
        {reshuffleDays.map((day: string, index: number) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={commonStyles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      {isPerfectStreak ? (
        <View style={styles.maskContainer}>
          <View style={styles.gradientWrapper}>
            <LinearGradient
              colors={projectPalette.perfectStreakGradient}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}
            >
              <View style={styles.streak}>{renderStreak()}</View>
            </LinearGradient>
          </View>
        </View>
      ) : (
        <View style={styles.streak}>{renderStreak()}</View>
      )}
    </View>
  );
};

export default StreakComponent;
