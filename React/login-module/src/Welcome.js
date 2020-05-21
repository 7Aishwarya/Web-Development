import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Render(){
    return(
    ReactDOM.render(<App />, document.getElementById("root"))
    );
}

function Welcome() {
  return (
  <div class="welcome">
    <h1>Welcome to <span>Ticket Portal</span></h1>
    <button  id="button" onClick={Render}>Login to Generate Ticket</button>
 </div>
  );
}

export default Welcome;
