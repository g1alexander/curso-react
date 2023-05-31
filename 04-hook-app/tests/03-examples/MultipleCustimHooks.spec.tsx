import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustimHooks from "../../src/03-examples/MultipleCustimHooks";
import React from "react";
import { useFetch } from "../../src/hooks/useFetch";

import { beforeEach, vi } from "vitest";
import { useCounter } from "../../src/hooks";

vi.mock("../../src/hooks/useFetch", () => {
  const useFetch = vi.fn(() => ({
    data: null,
    isLoading: true,
    hasError: null,
  }));

  return { useFetch };
});

vi.mock("../../src/hooks/useCounter", () => {
  const useCounter = vi.fn(() => ({
    counter: 1,
    increment: vi.fn(),
    decrement: vi.fn(),
    reset: vi.fn(),
  }));

  return { useCounter };
});

describe("pruebas en <MultipleCustimHooks />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("should show default component", () => {
    render(<MultipleCustimHooks />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: "hi" });

    expect(nextButton).toBeDisabled();
  });

  test("should show quote", async () => {
    vi.mocked(useFetch).mockReturnValue({
      data: [{ quote: "hola", author: "world" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustimHooks />);

    expect(await screen.findByText("hola")).toBeInTheDocument();
    expect(screen.getByText("world")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: "hi" });

    expect(nextButton).not.toBeDisabled();
  });

  test("should call function increment", async () => {
    vi.mocked(useFetch).mockReturnValue({
      data: [{ quote: "hola", author: "world" }],
      isLoading: false,
      hasError: null,
    });

    vi.mocked(useCounter).mockReturnValue({
      counter: 1,
      increment: vi.fn(),
      decrement: vi.fn(),
      reset: vi.fn(),
    });

    render(<MultipleCustimHooks />);

    const nextButton = screen.getByRole("button", { name: "hi" });

    fireEvent.click(nextButton);

    expect(useCounter().increment).toHaveBeenCalledWith(1);
  });
});
