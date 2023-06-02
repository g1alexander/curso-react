import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage, UserContext } from "../../src/09-useContext";

import React from "react";
import { vi } from "vitest";

describe("test <LoginPage />", () => {
  test("should show component with user", () => {
    render(
      <UserContext.Provider
        value={{
          user: {
            id: 1,
            name: "test2",
            email: "",
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setUser: () => {},
        }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const code = screen.getByLabelText("code");
    expect(code.textContent).toBe('{"id":1,"name":"test2","email":""}');
  });

  test("should call handleLogin", () => {
    const setUser = vi.fn();

    render(
      <UserContext.Provider
        value={{
          user: {
            id: 1,
            name: "test2",
            email: "",
          },
          setUser,
        }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByLabelText("hola");

    fireEvent.click(button);

    expect(setUser).toBeCalledWith({
      id: 1234,
      name: "Fernando",
      email: "dsfsdf@asdas.com",
    });
  });
});
