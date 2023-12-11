import { StyleSheet } from "react-native";
import { projectPalette } from "../../styles/projectPallete";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  circle: {
    width: 32,
    height: 32.64,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  gradient: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  currentDayIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: projectPalette.foundationPrimary,
  },

  singleStreakBackground: {
    backgroundColor: projectPalette.black,
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },

  dayText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: projectPalette.foundationPrimary,
    marginBottom: 16,
  },

  withoutStreak: {
    backgroundColor: projectPalette.darkGray,
  },
});

export { styles };
