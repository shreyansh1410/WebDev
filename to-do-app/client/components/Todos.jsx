import React from "react";
import axios from "axios";

/*
todos will be an array of objects:
[{title:,description:},{},...]
*/
async function completedHandler(todoId, fetchTodos) {
  try {
    const response = await axios.put("http://localhost:8800/completed", {
      id: todoId,
    });
    if (response.status === 200) {
      alert("Todo added successfully!");
      fetchTodos();
    }
  } catch (err) {
    console.error("Failed to add todo:", err);
    // alert("Failed to update todo");
  }
}

const Todos = ({ todos, fetchTodos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => completedHandler(todo._id, fetchTodos)}>
              {todo.completed === true ? "Completed" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
