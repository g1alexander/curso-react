import { State } from ".";

interface Props {
  todo: State;
  onDeleteTodo: (todo: State) => void;
  onToggleTodo: (todo: State) => void;
}

export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }: Props) {
  return (
    <li>
      <span onClick={() => onToggleTodo(todo)}>{todo.desc}</span>

      {todo.done && <span> - Hecho</span>}
      <button onClick={() => onDeleteTodo(todo)}>Eliminar</button>
    </li>
  );
}
