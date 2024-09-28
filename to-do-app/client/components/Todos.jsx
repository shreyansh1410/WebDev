import React from "react";

/*
todos will be an array of objects:
[{title:,description:},{},...]
*/

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed === true ? "Completed" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
