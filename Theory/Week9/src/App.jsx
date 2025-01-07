import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
// import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // useEffect(() => {
  // setInterval(() => {
  //   setShow(!show);
  // }, 2000);
  // }, []);

  // return <div>{show && <MyComponent />}</div>;

  return<div className="text-4xl bg-cyan-300">Curency App</div>
}

// Functional Component

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("component mounted");
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted");
//     };
//   }, []);

//   // Render UI
//   return <div>From inside the component</div>;
// }


//Class Based Component

class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("unmounted");
  }

  render() {
    // Render UI
    return<div>Component</div>
  }
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
