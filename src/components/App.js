import React, {useState} from "react";
import Nav from "./Nav";
import Hog from "./Hog";
import Filter from "./Filter";
import Form from "./Form";

import hogs from "../porkers_data";

function App() {

	const initialState = hogs.map((hog)=> {
		hog.hidden=false
		return hog
	})

	const [isGreased, setGreased] = useState(false)
	const [sortBy, setSortBy] = useState('')

	const [modifiedHogs, setHogs] = useState(initialState)

	const hog2Display = modifiedHogs.filter((hog)=>isGreased? hog.greased===true? true : null : true)
							.sort((hog1, hog2) => sortBy!==''? hog1[sortBy] > (hog2[sortBy])? 1: -1 : true)
							.filter((hog)=> hog.hidden? false : true);

	const handleOnGreasedChange = () => {
		setGreased(()=>!isGreased)
		
	}
	const handleOnSortByChange = (e) => {
		setSortBy(()=>e.target.value)	
	}
	const handleOnHideHogs = (name) => {

		let newHogs = modifiedHogs.map((hog)=> {
			if(name === hog.name){
				return {...hog, hidden: !hog.hidden}
			}
			return hog
		})
		console.log(newHogs)
		console.log(modifiedHogs)
		setHogs(newHogs)
	}
	const handleOnSubmit = (data) => {
		setHogs([...modifiedHogs, data])
	}
	
	return (
		<div className="App">
			<Nav />
			<Form onSubmit={handleOnSubmit}/>
			<Filter isGreased={isGreased} onChangeGreased={handleOnGreasedChange} sortBy={sortBy} setSortBy={handleOnSortByChange}/>
			<div className='ui grid container'>
				{hog2Display.map((hog)=> <Hog key={hog.name} hog={hog} onHideHog={handleOnHideHogs}/>)}
			</div>
		</div>
	);
}

export default App;
