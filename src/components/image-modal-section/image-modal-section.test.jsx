import React from "react";
import {
  render,
  fireEvent,
  screen,
  within,
  waitFor,
} from "@testing-library/react";

import ImageModalSection from "./image-modal-section";
import ImageModal from "./image-modal";

describe("ImageModalSection", () => {
  test("should render the modal invoking section", () => {
    render(<ImageModalSection />);

    const modalInvokeSection = screen.getByTestId("modal-invoke-section");
    expect(modalInvokeSection).toBeInTheDocument();

    const button = within(modalInvokeSection).getByRole("button", {
      name: "Get cat",
    });
    expect(button).toBeInTheDocument();
  });

  test("should render image modal on button click", () => {
    render(<ImageModalSection />);

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

describe("ImageModal", () => {
  let props = {
    show: true,
    onHide: jest.fn(),
  };

  test("should render the image modal correctly when visible", () => {
    render(<ImageModal {...props} />);

    const catImageModal = screen.getByTestId("cat-image-modal");
    const catImage = within(catImageModal).getByTestId("cat-image");
    const newCatButton = within(catImageModal).getByTestId("close-button");
    const closeButton = within(catImageModal).getByTestId("new-cat-button");

    expect(catImage).toBeInTheDocument();
    expect(newCatButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  test("should close modal if `Close` button is clicked", async () => {
    // override onHide mockImplementation - to set the show prop to false when called
    // why did this not work when i tried to add this mockImplementation in the global props decalaration
    props = {
      ...props,
      onHide: jest.fn().mockImplementation(() => (props.show = false)),
    };

    const { rerender } = render(<ImageModal {...props} />);

    const catImageModal = () => screen.queryByTestId("cat-image-modal");
    const closeButton = within(catImageModal()).getByTestId("close-button");

    expect(props.show).toBe(true);
    expect(catImageModal()).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(props.onHide).toHaveBeenCalledTimes(1);
    expect(props.show).toBe(false);

    // re-render the ImageModal with the now false show prop
    rerender(<ImageModal {...props} />);

    // wait for the render to finish - when the modal is not in the document anymore
    await waitFor(() => expect(catImageModal()).not.toBeInTheDocument());
  });
});
