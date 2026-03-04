import React from "react";

const Child = ({ send }) => {
  return (
    <div>
      <button onClick={() => send("Hello from Child")}>
        Click to send Data
      </button>
    </div>
  );
};

export default Child;