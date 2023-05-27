import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyProcess = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("hi");
  }

  return `${iterations} iterations done`;
};

export default function MemoHook() {
  const { counter, increment } = useCounter(4000);

  const [show, setshow] = useState<boolean>(true);

  const memorizedValue = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <>
      <div>counter: {counter}</div>

      <small>{memorizedValue}</small>

      <button onClick={() => increment(1)}>+1</button>

      <button onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}
