import Button from "../components/Button";
import { useState, useReducer } from "react";
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_DELTA = 'set-delta';

function CounterPage({initialCount}){
	//const [count, setCount] = useState(initialCount);
	//const [countDelta, setCountDelta] = useState(0);

	const [state, dispatch] = (reducer, {
		count: initialCount,
		countDelta: 0
	});

	const reducer = (state, action) => {
		switch(action.type){
			case 'increment': return {...state, count:count+1}
			case 'decrement': return {...state, count:count-1}
			case 'set-delta': return {...state, countDelta: action.payload}
		}
		return {...state, count: state.count+1};
	}
	
	const increment = () => {
		dispatch({type: INCREMENT_COUNT,})
	}
	const decrement = () => {
		dispatch({type:DECREMENT_COUNT})
	}
	const handleDelta = (event) => {
		const delta = parseInt(event.target.value) || 0;
		dispatch({
			type: SET_DELTA,
			payload: delta
			
		})
	};
	const handleSubmit = (event)=>{
		event.preventDefault();
		//setCount(count + countDelta);
		//setCountDelta(0);
	}
	

	return (
		<Panel className="m-3">
			<h1 className="text-lg">Count is {count}</h1>
			<div className="flex flex-row">
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>Decrement</Button>
			</div>

			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input 
				value= {deltaCount || 0}
				type="number" 
				onChange={handleDelta}
				className="p-1 m-3 bg-gray-50 border border-gray-300"/>
				<Button></Button>
			</form>
		</Panel>


	)
}