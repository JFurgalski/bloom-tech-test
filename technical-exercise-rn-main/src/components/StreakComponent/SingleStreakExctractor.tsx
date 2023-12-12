import React from "react";
import SingleStreak from "../SingleStreak/SingleStreak";
import { getCurrentDayIndex } from "../../utils/appUtils";

interface SingleStreakExctratorProps {
  index: number;
  currentStreakLength: number;
  renderedDaysCount: number;
  startDayIndex: number;
}

const SingleStreakExctrator: React.FC<SingleStreakExctratorProps> = ({
  index,
  currentStreakLength,
  renderedDaysCount,
  startDayIndex,
}) => {
  const adjustedIndex = (getCurrentDayIndex() + 7 - startDayIndex) % 7;
  const isCurrentDay: boolean = index === adjustedIndex;

  const hasStreak: boolean =
    index < renderedDaysCount || (renderedDaysCount === 1 && index === 0);

  const isPerfectWeek =
    (currentStreakLength / 7) % 1 === 0 && index < renderedDaysCount;

  return (
    <SingleStreak
      key={index}
      hasStreak={hasStreak}
      isCurrentDay={isCurrentDay}
      isPerfectWeek={isPerfectWeek}
    />
  );
};

export default SingleStreakExctrator;
