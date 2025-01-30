import React from "react";
import { render, screen } from "@testing-library/react";
import Sample from "@/components/Sample";

describe("Sample Component", () => {
  it("renders with correct label", () => {
    render(<Sample label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
