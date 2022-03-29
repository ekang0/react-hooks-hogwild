import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClickViewDetails() {
    setShowDetails(!showDetails)
  };

    return (
      <div id={hog.name} className="ui card eight wide column" onClick={handleClickViewDetails}>
        <h4>{hog.name}</h4>
        <img src={hog.image} alt={hog.name}></img>
        <div className="additional hog details">
         {showDetails ? <HogDetails hog={hog}/> : null}
        </div>
      </div>
    );
};

export default HogCard;