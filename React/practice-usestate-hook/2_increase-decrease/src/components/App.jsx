import React, { useState } from "react";

function App() {
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount2(count2 + 1);
  }
  function decrease() {
    setCount2(count2 - 1);
  }

  return (
    <div className="container">
      <h1>{count2}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
