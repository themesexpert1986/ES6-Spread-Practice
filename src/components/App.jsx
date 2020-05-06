import React, { useState } from "react";

function App() {
  const [InputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }
  function handleClick(event) {
    setItems(preItems => {
      return [...preItems, InputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="todo"
          id="todo"
          value={InputText}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map(todoItem => (
            <li key={todoItem}> {todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
