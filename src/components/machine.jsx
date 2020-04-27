import React, { useState, useEffect } from "react";
import Soundboard from "./soundboard";
import Beat from "./beat";

const Machine = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount((count + 1) % 15);
    }, 200);
    return () => clearInterval(id);
  });

  return (
    <div className="machine">
      <h3>{"Drum Machine"}</h3>
      <p>{count}</p>
      <Soundboard count={count} />
      <Beat count={count} />
    </div>
  );
};

export default Machine;
