import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-flow-row md:grid-flow-col">
      <div className="bg-slate-400">first</div>
      <div className="bg-red-400">second</div>
      <div className="bg-green-400">third</div>
    </div>
  );
}

export default App;
