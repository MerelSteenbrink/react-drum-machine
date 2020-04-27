import React, { useState } from "react";

const Block = ({ id, sound, count }) => {
const [clicked, setClick] = useState(false);

const handleClick = () => {
    setClick(!clicked)
}
  let classi = clicked ? "clicked blokje" : "blokje";
  return <div className={classi} onClick={handleClick}></div>;
};

export default Block;
