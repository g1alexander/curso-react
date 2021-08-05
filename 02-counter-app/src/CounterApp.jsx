import PropTypes from "prop-types";
import { useState } from "react";

export function CounterApp({ value = 10 }) {
  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount(count + 1);
    // setCount((c)=> c + 1) c = count
  };

  const handleReset = () => setCount(value);

  const handleSubtract = () => setCount(count - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};
