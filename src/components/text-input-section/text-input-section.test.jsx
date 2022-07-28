import { render, fireEvent, screen, within } from "@testing-library/react";

import TextInputSection from "./text-input-section";

describe("TextInputSection", () => {
  test("should render the text input section", () => {
    render(<TextInputSection />);

    const textInputSection = screen.getByTestId("text-input-section");
    expect(textInputSection).toBeInTheDocument();

    const textInputForm = within(textInputSection).getByRole("textbox");
    expect(textInputForm).toBeInTheDocument();

    const textOutput = within(textInputSection).getByTestId("text-output");
    expect(textOutput).toBeInTheDocument();
  });

  test("should update the text output as per new text input", () => {
    render(<TextInputSection />);

    const textInputSection = screen.getByTestId("text-input-section");
    const textInputForm = within(textInputSection).getByRole("textbox");
    const textOutput = within(textInputSection).getByTestId("text-output");

    expect(textOutput).toHaveTextContent("You didn't tell me anything");

    const inputText = "total world peace";

    fireEvent.change(textInputForm, {
      target: { value: inputText },
    });
    fireEvent.keyDown(textInputForm, {
      key: "Enter",
    });

    expect(textOutput).toHaveTextContent(
      `So you like ${inputText}... Interesting`
    );
  });
});
