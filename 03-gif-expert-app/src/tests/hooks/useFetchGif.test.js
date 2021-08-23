import { renderHook } from "@testing-library/react-hooks";
import { useFetchGif } from "../../hooks/useFetchGif";

describe("pruebas en hook useFetchGif", () => {
  test("debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("the beatles")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    // const { data, loading } = useFetchGif("the beatles");

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("the beatles")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
