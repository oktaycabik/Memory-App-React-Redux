import React from "react";
import { useDispatch } from "react-redux";
import {
  openCard,

  closeCard,
 
} from "./redux/memoryGame/memoryGameSlice";

function Card({ item }) {
  

  const dispatch = useDispatch();

  const handleClick = async (item) => {
    await dispatch(openCard(item));
  
    setTimeout(() => {
      dispatch(closeCard());
    }, 1000);
  };

  const itemClass = item.stat ? "active " + item.stat : "";
  return (
    <>
      <div onClick={() => handleClick(item)} className={"card " + itemClass}>
        <img
          alt={item.name}
          src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${item.name}.png`}
        />
      </div>
    </>
  );
}

export default Card;
