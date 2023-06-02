import { beforeEach, vi } from "vitest";
import { State } from "../../src/08-useReducer/todoReducer";
import { render, fireEvent } from "@testing-library/react";
import React from "react";

import TodoItem from "../../src/08-useReducer/TodoItem";
describe("test in <TodoItem />", () => {
  const todo: State = {
    id: 1,
    desc: "Aprender React",
    done: false,
  };

  const onDeleteTodo = vi.fn();
  const onToggleTodo = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("should show todo pending of complete", () => {
    const result = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const liElement = result.getByRole("listitem");
    expect(liElement.className).toBe("li");

    const spanElement = result.getByLabelText("span");
    expect(spanElement.className).toBe("spann");
  });

  test("should show todo complete", () => {
    todo.done = true;

    const result = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanCompleteElement = result.getByLabelText("complete");

    expect(spanCompleteElement.textContent).toBe(" - Hecho");
  });

  test("should call onToggleTodo when clicked", () => {
    const result = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = result.getByLabelText("span");

    fireEvent.click(spanElement);

    expect(onToggleTodo).toHaveBeenCalledWith(todo);
  });

  test("should call onDeleteTodo when clicked", () => {
    const result = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const buttonElement = result.getByRole("button");

    fireEvent.click(buttonElement);

    expect(onDeleteTodo).toHaveBeenCalledWith(todo);
  });
});
