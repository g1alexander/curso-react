import { State } from ".";

interface Props {
  todo: State;
  onDeleteTodo: (todo: State) => void;
  onToggleTodo: (todo: State) => void;
}

export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }: Props) {
  return (
    <li className="li">
      <span
        aria-label="span"
        className="spann"
        onClick={() => onToggleTodo(todo)}
      >
        {todo.desc}
      </span>

      {todo.done && <span aria-label="complete"> - Hecho</span>}
      <button onClick={() => onDeleteTodo(todo)}>Eliminar</button>
    </li>
  );
}
