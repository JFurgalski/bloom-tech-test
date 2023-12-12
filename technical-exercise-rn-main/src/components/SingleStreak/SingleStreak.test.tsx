import React from "react";
import { render } from "@testing-library/react-native";
import SingleStreak from "./SingleStreak";

describe("SingleStreak Component", () => {
  it("renders without streak", () => {
    const { getByTestId } = render(
      <SingleStreak
        hasStreak={false}
        isCurrentDay={false}
        isPerfectWeek={false}
      />
    );
    expect(getByTestId("single-streak-container")).toBeTruthy();
  });

  it("renders with streak and current day", () => {
    const { getByTestId } = render(
      <SingleStreak
        hasStreak={true}
        isCurrentDay={true}
        isPerfectWeek={false}
      />
    );
    expect(getByTestId("single-streak-container")).toBeTruthy();
    expect(getByTestId("current-day-indicator")).toBeTruthy();
  });

  it("renders with perfect week", () => {
    const { getByTestId } = render(
      <SingleStreak
        hasStreak={true}
        isCurrentDay={false}
        isPerfectWeek={true}
      />
    );
    expect(getByTestId("single-streak-container")).toBeTruthy();
    expect(getByTestId("perfect-week-icon")).toBeTruthy();
  });

});
