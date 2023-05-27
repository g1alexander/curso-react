import { TodoList, TodoAdd } from ".";
import { useTodos } from "../hooks";

export default function TodoApp() {
  const {
    todos,
    onDeleteTodo,
    onNewTodo,
    onToggleTodo,
    onCompletedTodos,
    onPendingTodos,
  } = useTodos();

  return (
    <>
      <div>
        TodoApp {onCompletedTodos()}, pendientes {onPendingTodos()}
      </div>
      <hr />

      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />

      <TodoAdd onNewTodo={onNewTodo} />
    </>
  );
}
