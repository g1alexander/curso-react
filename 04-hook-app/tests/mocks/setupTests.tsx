import React from "react";
import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../../src/09-useContext";

export function renderWithRouter(path: string) {
  const router = createMemoryRouter([...routes], {
    initialEntries: [path],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
}
