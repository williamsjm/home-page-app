import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import "../../../i18nConfig";

test("renders HomePage component", () => {
  render(<HomePage />);
});

test("renders ColumnA and ColumnB components", () => {
  const { queryAllByTestId } = render(<HomePage />);

  const columnAElements = queryAllByTestId("columnA");
  const columnBElements = queryAllByTestId("columnB");

  expect(columnAElements.length).toBeGreaterThan(0);
  expect(columnBElements.length).toBeGreaterThan(0);
});

test("renders ColumnB with rickMorty prop set to true", () => {
  const { getByTestId } = render(<HomePage />);
  const columnBWithProps = getByTestId("columnBWithProps");
  expect(columnBWithProps).toBeInTheDocument();
});
