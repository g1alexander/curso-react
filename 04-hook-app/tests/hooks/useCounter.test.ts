import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe("test useCounter", () => {
  test("should return default value", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should return counter with value 100", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should increment counter by 1", () => {
    const { result } = renderHook(() => useCounter());

    const { increment } = result.current;

    // permite actualizar el estado de react
    /* 
    Warning: An update to TestComponent inside a test was not wrapped in act(...). When testing, code that causes React state updates should be wrapped into act(...):
    */
    act(() => {
      increment(1);
      increment(1);
    });

    expect(result.current.counter).toBe(12);
  });

  test("should decrement counter by 1", () => {
    const { result } = renderHook(() => useCounter());

    const { decrement } = result.current;

    act(() => {
      decrement(1);
      decrement(1);
    });

    expect(result.current.counter).toBe(8);
  });

  test("should reset counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { reset, increment } = result.current;

    act(() => {
      increment(1);
      increment(1);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
