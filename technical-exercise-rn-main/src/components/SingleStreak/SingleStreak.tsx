import React from "react";
import { View } from "react-native";
import { styles } from "./SingleStreak.styles";
import { Icon } from "../Icon/Icon";
import { SingleStreakProps } from "./SingleStreak.types";
import { LinearGradient } from "react-native-svg";
import { projectPalette } from "../../styles/projectPallete";

const SingleStreak: React.FC<SingleStreakProps> = ({
  hasStreak,
  isCurrentDay,
  isPerfectWeek,
}) => {
  return (
    <View style={styles.container}>
      <View>
        {hasStreak ? (
          <LinearGradient
            colors={projectPalette.streakGradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {isPerfectWeek ? <Icon name="flame" /> : <Icon name="tick" />}
          </LinearGradient>
        ) : (
          <View />
        )}
        {isCurrentDay && hasStreak && <View />}
      </View>
    </View>
  );
};

export default SingleStreak;
