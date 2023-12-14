import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

test("renders the Footer component", () => {
  const { getByText } = render(<Footer />);

  // Ensure that the component renders your copyright text
  expect(getByText(/© JOB PORTAL 2023/i)).toBeInTheDocument();
});
