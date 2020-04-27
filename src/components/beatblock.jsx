import React, { useState } from "react";

const BeatBlock = ({ id, sound, count }) => {
const [clicked, setClick] = useState(false);

  let classi = id === count ? "boom blokje" : "blokje";
  return <div className={classi} ></div>;
};

export default BeatBlock;
