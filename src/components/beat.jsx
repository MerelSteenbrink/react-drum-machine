import React from "react";
import Block from "./block";

const TRACK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Beat = () => {
  return (
    <div className="beat">
      <div className="track">
        {TRACK.map((n) => (
          <Block id={n} sound={"beat"} key={n} />
        ))}
      </div>
    </div>
  );
};

export default Beat;
