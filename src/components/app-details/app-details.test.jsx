import React from "react";
import { render, screen } from "@testing-library/react";
import AppDetails from "./app-details";

test("should display the commit hash", () => {
  render(<AppDetails />);
  const commitHash = screen.getByTestId("commit-hash");
  expect(commitHash).not.toBeEmptyDOMElement();
});

test("should display the app version", () => {
  render(<AppDetails />);
  const appVersion = screen.getByTestId("app-version");
  expect(appVersion).not.toBeEmptyDOMElement();
});
