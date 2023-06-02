import { useContext } from "react";
import { UserContext } from ".";

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);

  // console.log({ user, setUser });

  const handleLogin = () => {
    setUser({
      id: 1234,
      name: "Fernando",
      email: "dsfsdf@asdas.com",
    });
  };

  return (
    <>
      <div>LoginPage</div>
      <pre>
        <code aria-label="code">{JSON.stringify(user)}</code>
      </pre>

      <button aria-label="hola" onClick={handleLogin}>
        Login establecer
      </button>
    </>
  );
}
