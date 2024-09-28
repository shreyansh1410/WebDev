import React, { useState } from "react";
import axios from "axios";

const CreateTodo = ({fetchTodos}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTodo = async () => {
    try {
      const response = await axios.post("http://localhost:8800/todo", {
        title: title,
        description: desc,
      });
      if (response.status === 200) {
        alert("Todo added successfully!");
        fetchTodos();
      }
    } catch (error) {
      console.error("Failed to add todo:", error);
      alert("Failed to add todo");
    }
  };

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="Add title"
        value={title} // Keep the input controlled
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        id="desc"
        type="text"
        placeholder="Add description"
        value={desc} // Keep the input controlled
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleAddTodo}>Add To do</button>
    </div>
  );
};

export default CreateTodo;
