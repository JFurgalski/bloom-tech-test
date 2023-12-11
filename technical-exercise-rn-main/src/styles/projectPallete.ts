import { StyleSheet } from "react-native";

const projectPalette = {
  streakGradient: ["#E32EED", "#F76938"],
  darkGray: "#3b3b3b",
  foundationPrimary: "#F7F7F7",
  black: "#000000",
  backgroundDark: "#1F1F1F",
  perfectStreakGradient: [
    "rgba(247, 105, 56, 0.6)",
    "rgba(227, 46, 237, 0.00)",
  ],
};

const commonStyles = StyleSheet.create({
  dayText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: projectPalette.foundationPrimary,
    marginBottom: 16,
  },
});

export { projectPalette, commonStyles };
