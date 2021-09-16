import React, { useState } from "react";
import "./App.css";
import Header from "./asset/Header.jsx";
import From from "./asset/From.jsx";
import TodosList from "./asset/TodosList.jsx";
import Footer from "./asset/Footer";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <From input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
