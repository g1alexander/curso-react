import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer";

import React from "react";
import { useTodos } from "../../src/hooks";
import { vi } from "vitest";

vi.mock("../../src/hooks/useTodos", () => {
  const useTodos = vi.fn(() => ({
    todos: [],
    onDeleteTodo: vi.fn(),
    onNewTodo: vi.fn(),
    onToggleTodo: vi.fn(),
    onCompletedTodos: vi.fn(),
    onPendingTodos: vi.fn(),
  }));

  return { useTodos };
});

describe("test <TodoApp />", () => {
  vi.mocked(useTodos).mockReturnValue({
    todos: [
      {
        id: 1,
        desc: "todo #1",
        done: false,
      },
      {
        id: 2,
        desc: "todo #2",
        done: true,
      },
    ],
    onDeleteTodo: vi.fn(),
    onNewTodo: vi.fn(),
    onToggleTodo: vi.fn(),
    onCompletedTodos: () => 1,
    onPendingTodos: () => 1,
  });

  test("should show component", () => {
    render(<TodoApp />);

    expect(screen.getByText("todo #1")).toBeTruthy();
    expect(screen.getByText("todo #2")).toBeTruthy();
  });
});
