import React from "react";
import { Text, View } from "react-native";
import SingleStreak from "../SingleStreak/SingleStreak";
import { styles } from "./StreakComponent.styles";
import { daysOfWeek } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles, projectPalette } from "../../styles/projectPallete";
import { StreakComponentProps } from "./StreakComponent.types";
import { reshuffleDaysOfWeek, isStreakComplete } from "../../utils/appUtils";
import SingleStreakExctrator from "./SingleStreakExctractor";

const StreakComponent: React.FC<StreakComponentProps> = ({ streak }) => {
  const booleanStreak = streak.map((item) => item === "true");
  const isPerfectStreak = isStreakComplete(booleanStreak);

  const getStartingDayIndex = (): number => {
    if (streak.length > 0) {
      const startDate = new Date(streak[0]);
      return startDate.getDay();
    }
    return 0;
  };

  const startingDayIndex = getStartingDayIndex();

  const adjustedDaysOfWeek = reshuffleDaysOfWeek(startingDayIndex, daysOfWeek);

  const renderStreakDays = () => {
    const currentStreak = streak.filter(Boolean);
    const currentStreakLength = currentStreak.length;
    let renderedDaysCount = currentStreakLength % 7;

    renderedDaysCount = renderedDaysCount === 0 ? 7 : renderedDaysCount;

    return Array.from({ length: adjustedDaysOfWeek.length }, (_, index) => {
      return (
        <SingleStreakExctrator
          index={index}
          startDayIndex={startingDayIndex}
          currentStreakLength={currentStreakLength}
          renderedDaysCount={renderedDaysCount}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysOfWeekWrapper}>
        {adjustedDaysOfWeek.map((day: string, index: number) => (
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
              <View style={styles.streak}>{renderStreakDays()}</View>
            </LinearGradient>
          </View>
        </View>
      ) : (
        <View style={styles.streak}>{renderStreakDays()}</View>
      )}
    </View>
  );
};

export default StreakComponent;
