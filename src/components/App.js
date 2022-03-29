import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";


import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false);
	const [displayHogs, setDisplayHogs] = useState(hogs);
	const [nameSort, setNameSort] = useState(false);
	const [weightSort, setWeightSort] = useState(false);
	

	function handleFilterGreased() {
		setShowGreased(!showGreased);
		if(showGreased === false) {
			const greaseHogsFiltered = displayHogs.filter(hog => hog.greased === true);
			setDisplayHogs(greaseHogsFiltered);
		} else {
			setDisplayHogs(hogs);
		};
	};

	function handleNameSort() {
		setNameSort(!nameSort);
		if(nameSort === false) {
			const nameSortList = displayHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name)
			);
			setDisplayHogs(nameSortList);
		} else {
			setDisplayHogs(hogs);
		}
	};

	function handleWeightSort() {
		setWeightSort(!weightSort);
		if(weightSort === false){
			const weightSortList = displayHogs.sort(function(hog1, hog2){return hog1.weight - hog2.weight});
			setDisplayHogs(weightSortList);
		} else {
			setDisplayHogs(hogs);
		}
	};


	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />		
				<Filter greaseFilterClick={handleFilterGreased} onSortNameClick={handleNameSort} onSortWeightClick={handleWeightSort}/>
			</div>
			<div className="sixteen wide column centered">
				<HogList hogList={displayHogs}/>
			</div>
		</div>
	);
}

export default App;
