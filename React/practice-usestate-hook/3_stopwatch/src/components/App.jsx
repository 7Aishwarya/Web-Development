import React, { useState } from "react";

function App() {
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount2(count2 + 1);
    setInterval(increase, 1000);
  }
  function decrease() {
    setCount2(count2);
  }

  return (
    <div className="container">
      <h1>{count2}</h1>
      <button onClick={increase}>Start</button>
      <button onClick={decrease}>Stop</button>
    </div>
  );
}

export default App;
