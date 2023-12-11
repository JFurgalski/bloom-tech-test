import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "../Icon/Icon";
import { styles } from "./SingleStreak.styles";
import { SingleStreakProps } from "./SingleStreak.types";
import { projectPalette } from "../../styles/projectPallete";

const SingleStreak: React.FC<SingleStreakProps> = ({
  hasStreak,
  isCurrentDay,
  isPerfectWeek,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {hasStreak ? (
          <LinearGradient
            colors={projectPalette.streakGradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            {isPerfectWeek ? <Icon name="flame" /> : <Icon name="tick" />}
          </LinearGradient>
        ) : (
          <View style={[styles.singleStreakBackground, styles.withoutStreak]} />
        )}
        {isCurrentDay && hasStreak && (
          <View style={styles.currentDayIndicator} />
        )}
      </View>
    </View>
  );
};

export default SingleStreak;
