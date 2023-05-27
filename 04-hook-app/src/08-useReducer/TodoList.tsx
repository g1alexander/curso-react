import { State, TodoItem } from ".";

interface Props {
  todos: State[];
  onDeleteTodo: (todo: State) => void;
  onToggleTodo: (todo: State) => void;
}

export default function TodoList({ todos, onDeleteTodo, onToggleTodo }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
}
