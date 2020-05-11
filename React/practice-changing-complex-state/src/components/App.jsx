import React, { useState } from "react";

function App() {
  const date = new Date();
  var hrs = date.getHours();
  var greeting = "";
  if (hrs < 12) {
    greeting = "Good Morning";
  } else if (hrs >= 13 && hrs <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const [contact, setContact] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  const [text, setText] = useState("");
  function handleClick(event) {
    event.preventDefault();
    const { fName, lName } = contact;
    console.log(fName);
    setText(greeting + " " + fName + " " + lName);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
