import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { projectPalette } from "./src/styles/projectPallete";
import SingleStreak from "./src/components/SingleStreak/SingleStreak";
import StreakComponent from "./src/components/StreakComponent/StreakComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <StreakComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: projectPalette.darkGray,
    alignItems: "center",
    justifyContent: "center",
  },
});
