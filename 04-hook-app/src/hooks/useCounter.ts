import { useState } from "react";

export function useCounter(initialValue = 10) {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (payload: number): void => {
    setCounter((current) => current + payload);
  };

  const decrement = (payload: number): void => {
    setCounter((current) => current - payload);
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
