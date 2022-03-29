import React from "react";

function HogDetails( { hog }){
//specialty, weight, greased, and highest medal achieved
const { greased, weight, specialty, "highest medal achieved" : medal} = hog

  return (
    <div className="description"> 
      <p className="specialty">Specialty: {specialty}</p>
      <p className="weight">Weight: {weight}</p>
      <p className="greased">Greased: {greased ? "Greased" : "Nongreased"}</p>
      <p className="medal">Highest medal achieved: {medal}</p>
    </div>
  );
};

export default HogDetails;