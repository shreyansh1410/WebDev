import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "go to gym from 7-9",
      completed: true,
    },
    {
      title: "study DSA",
      description: "study DSA from 9-10",
      completed: false,
    },
  ]);

  function addRandomToDo(){
    setTodos([...todos, {
      title: "asadas",
      description: "asdasda"
    }]);
  }

  return (
    <div className="outerDiv">
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
      {/* {JSON.stringify(todos)} */}
      <button onClick={addRandomToDo}>Add a To Do</button>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
};



// function CustomButton(props) {
//   function onclickhandler() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onclickhandler}>Counter {props.count}</button>;
// }

function Todo(props) {
  return (
    <div className="innerDiv">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
