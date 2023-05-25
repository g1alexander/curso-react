import { useCounter } from "../hooks/useCounter";

export default function CounterWithCustomHook() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <div>counter: {counter}</div>
      <button
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          decrement(1);
        }}
      >
        -1
      </button>
    </>
  );
}
