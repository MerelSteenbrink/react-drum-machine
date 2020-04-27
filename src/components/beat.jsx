import React from "react";
import BeatBlock from "./beatblock";

const TRACK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Beat = ({ count }) => {
  return (
    <div className="beat">
      <div className="track">
        {TRACK.map((n) => (
          <BeatBlock id={n} sound={"beat"} key={n} count={count} />
        ))}
      </div>
    </div>
  );
};

export default Beat;
