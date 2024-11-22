import { useEffect, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 10000);
  }, []);

  return <div>{show && <MyComponent />}</div>;
}

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("component mounted");
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>From inside the component</div>;
}

//class based component

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

export default App;
