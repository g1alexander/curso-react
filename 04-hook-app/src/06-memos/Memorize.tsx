import { useState } from "react";
import { useCounter } from "../hooks";
import Small from "./Small";

export default function Memorize() {
  const { counter, increment } = useCounter(1);

  const [show, setshow] = useState<boolean>(true);

  return (
    <>
      <div>
        counter: <Small {...{ counter }} />
      </div>
      <button onClick={() => increment(1)}>+1</button>

      <button onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}
