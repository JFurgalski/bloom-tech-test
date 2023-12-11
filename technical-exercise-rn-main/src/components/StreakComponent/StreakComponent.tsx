import React from "react";
import { View, Text } from "react-native";
import { styles } from "./StreakComponent.styles";
import { StreakComponentProps } from "./StreakComponent.types";
import SingleStreak from "../SingleStreak/SingleStreak";

const StreakComponent: React.FC<StreakComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <SingleStreak
        isCurrentDay={true}
        isPerfectWeek={true}
        hasStreak={true}
      />
    </View>
  );
};

export default StreakComponent;
