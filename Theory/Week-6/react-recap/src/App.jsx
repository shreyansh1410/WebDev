import { memo, useCallback, useEffect, useMemo, useState } from "react";
import UseRef from "./UseRef";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);


  //  USEMEMO
  /*
  prevent re rendering when only bankData changes and exchangeData(s) does not change
  const cryptoReturns = useMemo(() => {
    console.log("Render before");

    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);
  */

  /*
  useCallback is not about minimising the amount of code that is run
  useCallback is about not re rendering a child component,  if the function hasn't changed or doesn't need to change across re renders 
  */

  const cryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  // const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      {/* these two functions will re render on the change of bankData, coz App re renders, even though there props are unchanged, to prevent this, use Memo (not useMemo) */}
      {/* <Child cryptoReturns={cryptoReturns} /> */}

      <UseRef/>
    </div>
  );
}


//  MEMO
const Child = memo(({ cryptoReturns }) => {
  console.log("crypto child re rendered ");
  return <div>Your crypto returns are: {cryptoReturns()}</div>;
});

export default App;
