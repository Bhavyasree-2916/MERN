import React, { useContext } from "react";
import Child from "./Child"; // adjust path if needed
import { userContext } from "../App";

const Parent = () => {

  const { name } = useContext(userContext);

  const getData = (data) => {
    console.log("Received from child:", data);
    alert("Received from child: " + data);
  };

  return (
    <div>
      <h1>From App.jsx: {name}</h1>

      <h2>Parent Component</h2>

      <Child send={getData} />
    </div>
  );
};

export default Parent;