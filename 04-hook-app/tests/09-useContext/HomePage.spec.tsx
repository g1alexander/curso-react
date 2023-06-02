import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext";

import React from "react";
import { UserContext } from "../../src/09-useContext";
describe("test <HomePage />", () => {
  test("should show component with user", () => {
    render(
      <UserContext.Provider
        value={{
          user: {
            id: 1,
            name: "test",
            email: "",
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setUser: () => {},
        }}
      >
        <HomePage />
      </UserContext.Provider>
    );

    const code = screen.getByLabelText("code");
    expect(code.textContent).toBe('{"user":{"id":1,"name":"test","email":""}}');
  });
});
