import React from "react";
import Soundboard from "./soundboard";
import Beat from "./beat";

const Machine = () => {
  return (
    <div className="machine">
      <h3>{"Drum Machine"}</h3>
      <Soundboard />
      <Beat />
    </div>
  );
};

export default Machine;
