import { Action, State, todoReducer } from "../../src/08-useReducer";

describe("test useReducer", () => {
  const initialState: State[] = [
    {
      desc: "hola",
      done: false,
      id: 1,
    },
  ];
  test("should return initial state", () => {
    const action: Action = {
      type: "",
    };
    const newState = todoReducer(initialState, action);

    expect(newState).toBe(initialState);
  });

  test("should add todo", () => {
    const action: Action = {
      type: "[TODO] add todo",
      payload: {
        desc: "hola2",
        id: 2,
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);

    expect(newState).toContain(action.payload);
    expect(newState.length).toBe(2);
  });

  test("should delete todo", () => {
    const action: Action = {
      type: "[TODO] delete todo",
      payload: {
        desc: "hola",
        id: 1,
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("should change toggle todo", () => {
    const action: Action = {
      type: "[TODO] toggle todo",
      payload: {
        desc: "hola",
        id: 1,
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);
  });
});
