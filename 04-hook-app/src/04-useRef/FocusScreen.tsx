import { useRef } from "react";

export default function FocusScreen() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    if (!inputRef.current) return;

    inputRef.current.select();
    // const input = document.querySelector("input");
    // input?.select();
    // console.log(input);
  };
  return (
    <>
      <h1>focus</h1>

      <hr />

      <input type="text" placeholder="nombre" ref={inputRef} />

      <button onClick={onFocus}>set focus</button>
    </>
  );
}
