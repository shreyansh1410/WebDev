import React, { useState } from "react";
import RenderTodo from "./RenderTodo";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "At 7pm",
    },
    {
      id: 2,
      title: "Go to market",
      description: "At 9pm",
    },
    {
      id: 3,
      title: "Go to restaurant",
      description: "At 10pm",
    },
  ]);

  function addTodoHandler() {
    const newtodo = {
      id: todo.length + 1,
      title: title,
      description: desc,
    };
    setTodo([...todo, newtodo]);
    setTitle("");
    setDesc("");
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Add title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        name="desc"
        id="desc"
        placeholder="Add Description"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={addTodoHandler}>Add todo</button>
      <RenderTodo todo={todo} />
    </div>
  );
};

export default Todo;
