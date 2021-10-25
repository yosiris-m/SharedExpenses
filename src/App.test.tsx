import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders prints welcome message", () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to SharedExpenses/i);
  expect(welcomeMessage).toBeInTheDocument();
});
