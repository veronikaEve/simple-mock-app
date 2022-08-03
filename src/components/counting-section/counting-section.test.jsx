import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";

import CountingSection from "./counting-section";

describe("CountingSection", () => {
  test("should render the click counting section", () => {
    render(<CountingSection />);

    const countingSection = screen.getByTestId("counting-section");
    expect(countingSection).toBeInTheDocument();

    const button = within(countingSection).getByRole("button", {
      name: "Boop",
    });
    expect(button).toBeInTheDocument();

    const clickCount = within(countingSection).getByTestId("click-count");
    expect(clickCount).toBeInTheDocument();
  });

  test("should update the click count on a button click", () => {
    render(<CountingSection />);

    const countingSection = screen.getByTestId("counting-section");
    const button = within(countingSection).getByRole("button", {
      name: "Boop",
    });
    const clickCount = within(countingSection).getByTestId("click-count");

    expect(clickCount).toHaveTextContent("You've clicked the button 0 times");
    fireEvent.click(button);
    expect(clickCount).toHaveTextContent("You've clicked the button 1 times");
  });
});
