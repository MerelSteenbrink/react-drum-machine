import React, { useState, useEffect } from "react";
import {note} from '../functions/sounds.js';
import Audio from './Audio'

const Block = ({ id, sound, count }) => {
const [clicked, setClick] = useState(false);
const handleClick = () => {
    setClick(!clicked)
}

const pling = note(Audio.context, sound)

useEffect(()=> {
    if (clicked && id=== count){
        pling()
    }
}, [id, clicked, count, pling])

let classi = clicked ? "clicked blokje" : "blokje";
  return <div className={classi} onClick={handleClick}></div>;
};

export default Block;
