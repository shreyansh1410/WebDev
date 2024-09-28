import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Header title="harkirat"></Header>
      <Header title="harkirat"></Header>
    </div>
  );
}

const Header = ({ title }) => {
  return <div>{title}</div>;
};

export default App;
