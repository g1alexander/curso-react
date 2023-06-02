import { renderWithRouter } from "../mocks/setupTests";

describe("test <MainApp />", () => {
  test("should show HomePage", () => {
    const screen = renderWithRouter("/");

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should show AboutPage", () => {
    const screen = renderWithRouter("/about");

    expect(screen.getByText("AboutPage")).toBeTruthy();
  });

  test("should show LoginPage", () => {
    const screen = renderWithRouter("/login");

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
