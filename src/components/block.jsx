import React from "react";

const Block = ({ id, sound, count }) => {
const classi = (id === count) ? "boom blokje" : "blokje";
  return (<div className={classi}></div>);
};

export default Block;
