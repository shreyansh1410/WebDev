import React from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(async () => {
    const res = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    const json = res.json();
    setData(json[currency]);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
