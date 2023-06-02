import { useContext } from "react";
import { UserContext } from ".";

export default function HomePage() {
  const context = useContext(UserContext);

  return (
    <>
      <div>HomePage</div>
      <pre>
        <code aria-label="code">{JSON.stringify(context)}</code>
      </pre>
    </>
  );
}
