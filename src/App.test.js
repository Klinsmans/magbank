import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders magbank header", () => {
  render(<App />);
  const el = screen.getByText(/MagBank/i);
  expect(el).toBeInTheDocument();
});
