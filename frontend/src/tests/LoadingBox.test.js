import React from "react";
import { render } from "@testing-library/react";
import LoadingBox from "../components/LoadingBox";

test("renders LoadingBox correctly", () => {
  const { asFragment } = render(<LoadingBox />);
  expect(asFragment()).toMatchSnapshot();
});
