import { useCallback, useContext, useState } from "react";
import { CountContext, SetCountContext } from "./Context";

function PropDrilling() {
  const [count, setCount] = useState(0);
  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <SetCountContext.Provider value={setCount}>
        <CountContext.Provider value={count}>
          <Count />
        </CountContext.Provider>
      </SetCountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count= useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const count = useContext(CountContext);
  const setCount = useContext(SetCountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default PropDrilling;
