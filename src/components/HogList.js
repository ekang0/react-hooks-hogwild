import React from "react";
import HogCard from "./HogCard"

function HogList({ hogList }) {
  return (
    <div className="ui three stackable cards">
      {hogList.map((hog) => (
        <HogCard key={hog.name} hog={hog}/>
      ))} 
    </div>
  );
};

export default HogList;