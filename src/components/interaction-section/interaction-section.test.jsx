import { render, fireEvent, screen, within } from "@testing-library/react";

import InteractionSection from "./interaction-section";

describe("InteractionSection", () => {
  describe("counting-section", () => {
    test("should render the click counting section", () => {
      render(<InteractionSection />);

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
      render(<InteractionSection />);

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

  describe("text-input-section", () => {
    test("should render the text input section", () => {
      render(<InteractionSection />);

      const textInputSection = screen.getByTestId("text-input-section");
      expect(textInputSection).toBeInTheDocument();

      const textInputForm = within(textInputSection).getByRole("textbox");
      expect(textInputForm).toBeInTheDocument();

      const textOutput = within(textInputSection).getByTestId("text-output");
      expect(textOutput).toBeInTheDocument();
    });

    test("should update the text output as per new text input", () => {
      render(<InteractionSection />);

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

  describe("modal-invoke-section", () => {
    test("should render the modal invoking section", () => {
      render(<InteractionSection />);

      const modalInvokeSection = screen.getByTestId("modal-invoke-section");
      expect(modalInvokeSection).toBeInTheDocument();

      const button = within(modalInvokeSection).getByRole("button", {
        name: "Get cat",
      });
      expect(button).toBeInTheDocument();
    });

    test("should render image modal", async () => {
      render(<InteractionSection />);

      const modalInvokeSection = screen.getByTestId("modal-invoke-section");
      const button = within(modalInvokeSection).getByRole("button", {
        name: "Get cat",
      });
      const catImageModal = () => screen.queryByTestId("cat-image-modal");

      expect(catImageModal()).not.toBeInTheDocument();
      fireEvent.click(button);
      expect(catImageModal()).toBeInTheDocument();

      // Asserting for something that doesn't exist calls to use queryBy*
      // I assigned it to a function so that when I call it again it re-renders the query.
      // Otherwise it would have stayed null from before the button press
    });
  });
});
