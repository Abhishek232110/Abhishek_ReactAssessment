import React from "react";
const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="bg-zinc-300 p-4 m-2 rounded-sm hover:bg-zinc-400 hover:text-white cursor-pointer shadow-md ">
      <img src={image} alt={`${name}`} className="h-56 w-full  " />
      <div className="flex items-center justify-between">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
      </div>
      <div className="">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};
export default BasketballPlayerCard;
