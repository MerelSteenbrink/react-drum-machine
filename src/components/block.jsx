import React, { useState, useEffect } from "react";
import {note, kick} from '../functions/sounds.js';
import Audio from './Audio'

const Block = ({ id, sound, count, base }) => {
const [clicked, setClick] = useState(false);
const handleClick = () => {
    setClick(!clicked)
}

const pling = note(Audio.context, sound) // A high tone
const pra = kick(Audio.context); // A base tone

useEffect(()=> {
    if (clicked && id=== count){
        base ? pra() : pling()
    }
}, [id, clicked, count, pling, pra, base])

let classi = clicked ? "clicked blokje" : "blokje";

  return <div className={classi} onClick={handleClick}></div>;
};

export default Block;
