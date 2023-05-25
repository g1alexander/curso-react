import { useEffect } from "react";
import Message from "./Message";
import { useForm } from "../hooks/useForm";

interface FormState {
  username: string;
  email: string;
  password: string;
}
export default function SimpleFormWithCustomHook() {
  const {
    // formState,
    email,
    password,
    username,
    handleInputChange,
    handleResetForm,
  } = useForm<FormState>({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  useEffect(() => {
    // console.log("hey username");
  }, [username]);

  useEffect(() => {
    // console.log("hey email");
  }, [email]);

  return (
    <>
      <div>SimpleFormWithCustomHook</div>
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
      <input
        type="password"
        value={password}
        name="password"
        placeholder="password"
        onChange={handleInputChange}
      />

      {username === "123" && <Message />}

      <button onClick={handleResetForm}>reset</button>
    </>
  );
}
