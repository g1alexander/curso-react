import { useState } from "react";

interface CounterState {
  counter1: number;
  counter2: number;
  counter3: number;
}

export default function CounterApp() {
  const [counters, setCounters] = useState<CounterState>({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counters;

  return (
    <>
      <div>CounterApp: {counter1}</div>
      <div>CounterApp: {counter2}</div>
      <div>CounterApp: {counter3}</div>

      <hr />

      <button
        onClick={() => setCounters({ ...counters, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
}
