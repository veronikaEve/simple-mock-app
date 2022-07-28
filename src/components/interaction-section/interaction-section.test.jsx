import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import InteractionSection from "./interaction-section";

describe("InteractionSection", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<InteractionSection />);

    expect(asFragment()).toMatchSnapshot();
  });
});
