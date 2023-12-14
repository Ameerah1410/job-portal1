import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

test("renders Footer correctly", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
