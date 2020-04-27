import React from "react";

const BeatBlock = ({ id, sound, count }) => {
  let classi = id === count ? "boom blokje" : "blokje";
  return <div className={classi}></div>;
};

export default BeatBlock;
