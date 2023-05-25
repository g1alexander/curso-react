import { useState } from "react";

export function useCounter(initialValue = 10) {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (payload: number): void => {
    setCounter(counter + payload);
  };

  const decrement = (payload: number): void => {
    setCounter(counter - payload);
  };

  const reset = (): void => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
