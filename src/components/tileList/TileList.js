import React from "react";
import { Tile } from '../tile/Tile'
export const TileList = ({tiles}) => {
  return (
    <div>
       {tiles.map((tile, index) => {
        const { name, ...description } = tile;
        return <Tile 
                key={index} // Remember to provide a unique key for each mapped element
                name={name}
                description={description}
                />
        
      })}
    </div>
  );
};
