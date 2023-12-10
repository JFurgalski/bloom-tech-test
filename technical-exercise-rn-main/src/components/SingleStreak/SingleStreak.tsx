import React from "react";
import { View, Text } from "react-native";
import { styles } from "./SingleStreak.styles";
import { SingleStreakProps } from "./SingleStreak.types";

const SingleStreak: React.FC<SingleStreakProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
};

export default SingleStreak;
