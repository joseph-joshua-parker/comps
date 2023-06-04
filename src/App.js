import { useState, useEffec } from "react";

import Dropdown from "./components/Dropdown.js";
import Accordion from "./components/Accordion";

const App = ()=>{
	const [selection, setSelection] = useState(null);

	const options = [
		{	label:	'Blood Red',	value: 'red' },
		{	label:	'Life Green',	value: 'green' },
		{	label:	'Sky Blue',		value: 'blue' },
	];

	return <div>
			<Dropdown 
				options={options} 
				value={selection}  
				onChange={setSelection}
			/>

			<Dropdown 
				options={options} 
				value={selection}  
				onChange={setSelection}
			/>
		</div>
}

export default App;