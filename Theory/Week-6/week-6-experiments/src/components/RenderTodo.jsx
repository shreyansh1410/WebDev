import React from "react";

const RenderTodo = ({ todo }) => {
  return todo.map((todo) => {
    return (
      <div key={todo.id}>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
      </div>
    );
  });
};

export default RenderTodo;
