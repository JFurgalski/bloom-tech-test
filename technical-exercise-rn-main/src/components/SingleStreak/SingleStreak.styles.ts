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
});

export { styles };
