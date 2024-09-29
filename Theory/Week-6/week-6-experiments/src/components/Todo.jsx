import React, { useEffect, useState } from "react";
import RenderTodo from "./RenderTodo";
import axios from "axios";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todoId, setTodoId] = useState("");
  const [buttonClicked, setButtonClicked] = useState("");
  const [todo, setTodo] = useState([]);

  async function buttonClickHandler() {
    if (!buttonClicked) return;
    const response = await axios.get(
      `http://localhost:3000/todo?id=${parseInt(buttonClicked)}`
    );
    const res = await response.data;
    console.log(res.todo);
    setTodo([res.todo]);
  }

  function addTodoHandler() {
    const newtodo = {
      title: title,
      description: desc,
    };
    setTodo([...todo, newtodo]); // Add the new todo to the state
    setTitle("");
    setDesc("");
  }

  async function getTodoById() {
    if (!todoId) {
      console.log("Please provide a valid todo ID");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:3000/todo?id=${todoId}`
      );
      const res = response.data;
      //   console.log(res.todo);
      setTodo([res.todo]); // Set the fetched todo by ID
    } catch (error) {
      console.error("Error fetching todo by ID:", error);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      const res = response.data;
      setTodo([...todo, ...res]); // Append the fetched todos to the current list
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  useEffect(() => {
    buttonClickHandler();
  }, [buttonClicked]);

  //   useEffect(() => {
  //     getTodoById();
  //   }, [todoId]);

  //   useEffect(() => {
  //     fetchTodos();
  //     const intervalId = setInterval(() => {
  //       fetchTodos();
  //     }, 5000);

  //     return () => clearInterval(intervalId); // Clean up interval on component unmount
  //   }, []);

  return (
    <div>
      <button
        onClick={() => {
          setButtonClicked(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setButtonClicked(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setButtonClicked(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setButtonClicked(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setButtonClicked(5);
        }}
      >
        5
      </button>
      <br />
      <br />

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
      <br />
      <br />
      <input
        type="text"
        name="todobyid"
        id="tdobyid"
        placeholder="Enter todo id"
        value={todoId}
        onChange={(e) => setTodoId(e.target.value)}
      />
      <br />
      <br />
      {/* <button onClick={getTodoById}>Get Todo By ID</button> */}
      {todo.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <RenderTodo todo={todo} />
      )}
    </div>
  );
};

export default Todo;
