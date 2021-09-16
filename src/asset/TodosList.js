import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="desain-hasil-list" key={todo.id}>
          <input type="text" value={todo.title} className="hasil-list " onChange={(event) => event.preventDefault()} />
          <div>
            <button className="tombol-hapus " onClick={() => handleDelete(todo)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
