import React from "react";
import { render, screen } from "@testing-library/react";

import NavigationBar from "./navbar";

describe("NavigationBar", () => {
  test("should render navbar", () => {
    render(<NavigationBar />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  test("Navbar brand should have link to the home page", () => {
    render(<NavigationBar />);

    const navbarBrand = screen.getByRole("link", { name: "Simple Mock App" });
    expect(navbarBrand).toHaveAttribute("href", "home");
  });

  test("Nav link should have link to the home page", () => {
    render(<NavigationBar />);

    const homeNavLink = screen.getByRole("link", { name: "Home" });
    expect(homeNavLink).toHaveAttribute("href", "home");
  });

  test("Nav link should have link to the about page", () => {
    render(<NavigationBar />);

    const aboutNavLink = screen.getByRole("link", { name: "About" });
    expect(aboutNavLink).toHaveAttribute("href", "about");
  });
});
