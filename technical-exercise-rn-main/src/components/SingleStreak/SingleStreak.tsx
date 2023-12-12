import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "../Icon/Icon";
import { styles } from "./SingleStreak.styles";
import { SingleStreakProps } from "./SingleStreak.types";
import { projectPalette } from "../../styles/projectPallete";

const SingleStreak: React.FC<SingleStreakProps> = ({
  hasStreak,
  isCurrentDay,
  isPerfectWeek,
  testID,
}) => {
  return (
    <View style={styles.container} testID="single-streak-container">
      <View style={styles.circle}>
        {hasStreak ? (
          <LinearGradient
            colors={projectPalette.streakGradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
            testID={isPerfectWeek ? "perfect-week-gradient" : "streak-gradient"}
          >
            {isPerfectWeek ? (
              <Icon testID="perfect-week-icon" name="flame" />
            ) : (
              <Icon name="tick" />
            )}
          </LinearGradient>
        ) : (
          <View style={[styles.singleStreakBackground, styles.withoutStreak]} />
        )}
        {isCurrentDay && hasStreak && (
          <View
            testID="current-day-indicator"
            style={styles.currentDayIndicator}
          />
        )}
      </View>
    </View>
  );
};

export default SingleStreak;
