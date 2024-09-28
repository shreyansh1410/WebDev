import React, { useState } from "react";
import Header from "./Header";

const HeaderWithButton = () => {
  const [title, setTitle] = useState("My name is Harkirat");
  function changeTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick={changeTitle}>Click me to change title</button>
      <Header title={title} />
    </>
  );
};

export default HeaderWithButton;
