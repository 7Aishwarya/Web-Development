import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Hello");

  function handleClick() {
    setText("Submitted");
  }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
