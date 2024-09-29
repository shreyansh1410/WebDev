import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderTitleBS from "./components/HeaderTitleBS";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper";

function App() {
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
      <Todo/>
    </>
  );
}

export default App;
