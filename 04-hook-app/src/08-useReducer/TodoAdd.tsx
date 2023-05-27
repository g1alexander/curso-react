import { useForm } from "../hooks";
import { State } from ".";

interface FormState {
  description: string;
}

interface Props {
  onNewTodo: (todo: State) => void;
}

export default function TodoAdd({ onNewTodo }: Props) {
  const { formState, handleInputChange, handleResetForm } = useForm<FormState>({
    description: "",
  });

  const { description } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    onNewTodo({
      id: new Date().getTime(),
      desc: description,
      done: false,
    });

    handleResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Agregar pendiente</label>

      <input
        value={description}
        onChange={handleInputChange}
        type="text"
        name="description"
        placeholder="Aprender..."
        autoComplete="off"
      />

      <button type="submit">Agregar</button>
    </form>
  );
}
