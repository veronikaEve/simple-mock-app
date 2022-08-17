import React from "react";
import { render, screen } from "@testing-library/react";
import AppDetails from "./app-details";

describe("AppDetails", () => {
  const props = {
    appVersion: "1.2.3",
  };

  test("should display the commit hash", () => {
    render(<AppDetails {...props} />);
    const commitHash = screen.getByTestId("commit-hash");
    expect(commitHash).not.toBeEmptyDOMElement();
  });

  test("should display the app version", () => {
    render(<AppDetails {...props} />);
    const appVersion = screen.getByTestId("app-version");
    expect(appVersion).toHaveTextContent("v" + props.appVersion);
  });
});
