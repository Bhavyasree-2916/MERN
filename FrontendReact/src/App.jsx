//import React from "react";
import State from "./hooks/State";
import Parent from "./components/Parent";          // or "./components/Parent"
import User from "./components/User";
import Form from "./hooks/Form"
const App = () => {
  return (
    <>
      <Parent />
      <State/>
      <Form/>
      <User name="xyz" age={33} skills={["HTML", "CSS", "JS", "JAVA"]} />
    </>
  );
};

export default App;