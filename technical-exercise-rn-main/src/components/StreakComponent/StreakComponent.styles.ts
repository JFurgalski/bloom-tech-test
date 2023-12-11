import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  streak: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },

  dayContainer: {
    flex: 1,
    alignItems: "center",
  },

  daysOfWeekWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
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
