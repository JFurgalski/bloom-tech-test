import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { projectPalette } from "./src/styles/projectPallete";
import SingleStreak from "./src/components/SingleStreak/SingleStreak";
import StreakComponent from "./src/components/StreakComponent/StreakComponent";

export default function App() {

  const streakData: string[] = [
    "2023-12-07T00:00:00+00:00",
    "2023-12-08T00:00:00+00:00",
    "2023-12-09T00:00:00+00:00",
    "2023-12-10T00:00:00+00:00",
    "2023-12-11T00:00:00+00:00",
  ];


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <StreakComponent streak={streakData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: projectPalette.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
