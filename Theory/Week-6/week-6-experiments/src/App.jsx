import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import HeaderTitleBS from "./components/HeaderTitleBS";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper";

function App() {
  const [inputVal, setInputVal] = useState(0);
  const [counter, setCounter] = useState(0);

  //solution with useMemo:
  // let sum = useMemo(()=>{
  //   let ans = 0;
  //   for(let i=1;i<=inputVal;i++)
  //     ans+=i;
  //   return ans;
  // },[inputVal]);

  //solution without useMemo:
  const [sum, setSum] = useState(0);
  useEffect(() => {
    let ans = 0;
    for (let i = 1; i <= inputVal; i++) ans += i;
    setSum(ans);
  }, [inputVal]);

  return (
    <>
      {/* <CardWrapper>
        <CardWrapper>
          <CardWrapper>
            <div>Hi there!</div>
          </CardWrapper>
        </CardWrapper>
      </CardWrapper>
      <CardWrapper>Hi there 2!</CardWrapper> */}
      {/* <Todo/> */}
      <input
        type="text"
        name="number"
        id="number"
        placeholder="enter number"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <br />
      <br />
      Sum is : {sum}
      <br />
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter:{counter}
      </button>
    </>
  );
}

export default App;
