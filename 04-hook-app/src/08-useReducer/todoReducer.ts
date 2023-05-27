export interface State {
  id: number;
  desc: string;
  done: boolean;
}

export interface Action {
  type: string;
  payload?: State;
}

export const todoReducer = (state: State[], action: Action): State[] => {
  switch (action.type) {
    case "[TODO] add todo":
      if (!action.payload) return [...state];

      return [...state, action.payload];

    case "[TODO] delete todo":
      if (!action.payload) return [...state];

      return state.filter((todo) => todo.id !== action.payload?.id);

    case "[TODO] toggle todo":
      if (!action.payload) return [...state];

      return state.map((todo) =>
        todo.id === action.payload?.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};
