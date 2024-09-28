import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateTodo from "../components/CreateTodo";
import Todos from "../components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:8800/todos");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      setTodos(json.todos);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  useEffect(() => {
    // Fetch todos when the component mounts
    fetchTodos();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <CreateTodo fetchTodos={fetchTodos}/>
      <Todos todos={todos} fetchTodos={fetchTodos}/>
    </div>
  );
}

export default App;
