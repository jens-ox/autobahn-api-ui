import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders Autobahn API text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Autobahn API/i);
  expect(linkElement).toBeInTheDocument();
});
