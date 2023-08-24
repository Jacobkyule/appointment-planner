import React from "react";

 export const Tile = ({name, description}) => {
  const descriptionArr = Object.values(description)
  return (
    <div className="tile-container">
      <p className="tile-title">
        {name}
        </p>
      {
        descriptionArr.map((item, index) => (
          <p key={index} className="tile">
            {item}
          </p>
        ))
      }
    </div>
  );
};
