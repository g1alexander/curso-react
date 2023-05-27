interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

interface TodoAction {
  type: string;
  payload?: Todo;
}

const initialState: Todo[] = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

function todoReducer(state = initialState, action?: TodoAction): Todo[] {
  if (action?.type === "[TODO] add todo") {
    if (!action.payload) return state;

    return [...state, action.payload];
  }

  return state;
}

let todos: Todo[] = todoReducer();

const newTodo: Todo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const addTodoAction: TodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);

// no se muta el estado
// todos.push({
//   id: 2,
//   todo: "Comprar leche",
//   done: false,
// });
