import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Masukkan List anda ..." className="masukkan-list " value={input} required onChange={onInputChange} />
      <button className="tombol" type="submit">
        Add
      </button>
    </form>
  );
};
export default Form;
