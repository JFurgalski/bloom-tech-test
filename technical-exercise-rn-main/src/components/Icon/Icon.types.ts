import { StyleProp, TextStyle } from "react-native";

type IconNameProps = "tick" | "flame";

export type IconProps = {
  name: IconNameProps;
  style?: StyleProp<TextStyle>;
  fill?: string;
  height?: number;
  width?: number;
  testID?: string;
};
