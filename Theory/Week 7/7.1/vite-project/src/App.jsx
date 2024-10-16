import "./App.css";
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";
import PropDrilling from "./components/PropDrilling";

// asynchronous component fetching or data fetching
import { lazy, Suspense } from "react";

const Dashboard = lazy(()=>import("./components/Dashboard"));
const Landing = lazy(()=>import("./components/Landing"));

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter> */}

      <PropDrilling/>
    </div>
  );
}

function Appbar() {
  //whatever uses this useNavigate hook, needs to be inside BrowserRouter
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </>
  );
}

export default App;
