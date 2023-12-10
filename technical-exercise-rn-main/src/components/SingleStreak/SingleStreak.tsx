import React from "react";
import { View, Text } from "react-native";
import { styles } from "./SingleStreak.styles";
import { SingleStreakProps } from "./SingleStreak.types";

const SingleStreak: React.FC<SingleStreakProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>I am the single streak comp</Text>
    </View>
  );
};

export default SingleStreak;
