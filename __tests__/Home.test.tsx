import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import React from "react";

it("should have a Docs text", () => {
  render(<Home />);
  const myElement = screen.getByText("Docs");

  expect(myElement).toBeInTheDocument();
});
