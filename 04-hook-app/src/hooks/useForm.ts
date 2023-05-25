import { useState } from "react";

export function useForm<T>(initialState: T) {
  const [formState, setFormState] = useState<T>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetForm,
  };
}
