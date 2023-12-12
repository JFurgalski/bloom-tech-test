export const isStreakComplete = (streak: boolean[]): boolean => {
  return streak.every((day) => day === true);
};

export const reshuffleDaysOfWeek = (
  startingDayIndex: number,
  dayOfWeek: string[]
): string[] => {
  return [
    ...dayOfWeek.slice(startingDayIndex),
    ...dayOfWeek.slice(0, startingDayIndex),
  ];
};

export const getCurrentDayIndex = (): number => {
    return new Date().getDay();
}
