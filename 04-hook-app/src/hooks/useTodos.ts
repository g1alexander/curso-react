import { useEffect, useReducer } from "react";

import { type State, todoReducer, Action } from "../08-useReducer";

const initialState: State[] = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo: State) => {
    const action: Action = {
      type: "[TODO] add todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const onDeleteTodo = (todo: State) => {
    const action: Action = {
      type: "[TODO] delete todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const onToggleTodo = (todo: State) => {
    const action: Action = {
      type: "[TODO] toggle todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const onPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  const onCompletedTodos = () => {
    return todos.filter((todo) => todo.done).length;
  };

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    onPendingTodos,
    onCompletedTodos,
  };
};
