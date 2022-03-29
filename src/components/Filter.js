import React from "react";

function Filter( { greaseFilterClick, onSortNameClick, onSortWeightClick } ) {


  return (
    <div className="sort filter">
      <div className="grease filter" onClick={greaseFilterClick}>
        <label>Show Greased Only Piggies </label>
        <input type="checkbox" name="grease" id="grease"></input>
      </div>
      <br></br>
      <div className="name sort" onClick={onSortNameClick}>
        <label>Sort by Name </label>
        <input type="checkbox" name="name" id="name"></input>
      </div>
      <br></br>
      <div className="weight sort" onClick={onSortWeightClick}>
        <label>Sort by Weight </label>
        <input type="checkbox" name="weight" id="weight"></input>
      </div>
    </div>
  );
};

export default Filter;