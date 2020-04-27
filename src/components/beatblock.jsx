import React, { useEffect } from "react";
import { kick } from "../functions/sounds.js";
import Audio from './Audio.js'

const BeatBlock = ({ id, sound, count }) => {
  const pra = kick(Audio.context);
  useEffect(() => {
    if (id === count) pra();
  }, [pra, count, id]);

  let classi = id === count ? "boom blokje" : "blokje";
  return <div className={classi}></div>;
};

export default BeatBlock;
