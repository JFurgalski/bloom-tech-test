import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  streak: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    marginHorizontal: -8,
  },

  dayContainer: {
    flex: 1,
    alignItems: "center",
  },

  daysOfWeekWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    alignItems: "center",
  },

  gradient: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  maskContainer: {
    overflow: "hidden",
    borderRadius: 25,
  },

  gradientWrapper: {
    borderRadius: 16,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export { styles };
