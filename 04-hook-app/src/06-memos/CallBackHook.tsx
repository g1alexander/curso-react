import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

export default function CallBackHook() {
  const [counter, setCounter] = useState(10);

  // las funciones apuntan a un espacio de memoria diferente cada vez que se renderiza el componente
  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // para evitar esto, se puede usar el hook useCallback
  const increment = useCallback((payload: number) => {
    setCounter((value) => value + payload);
  }, []);

  useEffect(() => {
    // ???
    // sin el useCallback, cada vez que se renderiza el componente, se vuelve a crear la función increment
    // increment()
  }, [increment]);

  return (
    <>
      <div>CallBackHook {counter}</div>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
}
