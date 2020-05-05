import React, { useState } from "react";

function App() {
  setInterval(update, 1000);
  var TIME = new Date().toLocaleTimeString();
  const [count, setCount] = useState({ TIME });

  function update() {
    setCount(TIME);
  }

  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
