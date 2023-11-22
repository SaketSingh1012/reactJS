import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function initialState() {
    setCount(0);
  }
  return (
    <>
      <button onClick={increase}>+</button>
      <button onClick={initialState}>Reset</button>
      <button onClick={decrease}>-</button>
      <h1>{count}</h1>
    </>
  );
};

export default Count;
