import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";
import { IconProps } from "./Icon.types";

const ICON_DATA = {
  tick: {
    width: 16.04,
    height: 12.04,
    viewBox: "0 0 17 13",
    path: "M5.86 13a1 1 0 01-.73-.32L0.27 7.51a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z",
  },
  flame: {
    width: 18.12,
    height: 22.24,
    viewBox: "0 0 20 23",
    path: "M6.751.42s2.693 3.686 3.246 7.16c.772 4.863-1.69 5.719-1.69 5.735 0-.016-2.818-.516-2.705-4.957C3.16 9.781.95 12.312.95 15.103c0 3.511 2.552 6.491 6.096 7.552-1.325-1.071-2.336-3.139-2-7.062 1.9 2.109 3.605 2.93 4.948 3.17 4.194-4.96 2.598-8.4 2.598-8.4 6 6.202 2.406 10.498.237 12.257 3-.963 5.17-3.382 5.924-6.326C19.71 12.427 19.198 5.58 6.751.42z",
  },
};

const Icon: FC<IconProps> = ({ name, style, fill, height, width, testID }) => {
  const iconData = ICON_DATA[name]; 

  if (!iconData) return null;

  const { viewBox, path } = iconData;

  return (
    <Svg
      testID={testID}
      style={style}
      width={width || iconData.width}
      height={height || iconData.height}
      viewBox={viewBox}
      fill="none"
    >
      <Path d={path} fill={fill || "#F7F7F7"} />
    </Svg>
  );
};

export { Icon };
