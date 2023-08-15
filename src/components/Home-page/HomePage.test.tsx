import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText(/N5/i)).toBeInTheDocument();
  });
});
