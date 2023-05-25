import { useEffect, useState } from "react";
import Message from "./Message";

interface FormState {
  username: string;
  email: string;
}

export default function SimpleForm() {
  const [formState, setFormState] = useState<FormState>({
    username: "hi",
    email: "hi@hi.com",
  });

  const { username, email } = formState;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("hey username");
  }, [username]);

  useEffect(() => {
    // console.log("hey email");
  }, [email]);

  return (
    <>
      <div>SimpleForm</div>
      <hr />

      <input
        type="text"
        value={username}
        name="username"
        placeholder="username"
        onChange={handleInputChange}
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="hola@hola.com"
        onChange={handleInputChange}
      />

      {username === "123" && <Message />}
    </>
  );
}
