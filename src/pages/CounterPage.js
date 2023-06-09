import Button from "../components/Button";
import { useState, useReducer } from "react";
import Panel from '../components/Panel';
import produce from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_DELTA = 'set-delta';
const APPLY_DELTA = 'apply-delta';

function CounterPage({initialCount}){
	//const [count, setCount] = useState(initialCount);
	//const [countDelta, setCountDelta] = useState(0);

	const [state, dispatch] = (produce(reducer), {
		count: initialCount,
		countDelta: 0
	});

	const reducer = (state, action) => {
		switch(action.type){
			case INCREMENT_COUNT: 	state.count++; return; 
			case DECREMENT_COUNT: 	state.count --; return;
			case SET_DELTA: 		countDelta = action.payload; return;

			case APPLY_DELTA: 		 	count = state.count+state.countDelta; 
										countDelta = 0;
										return;
									

			default : 				throw new Error('mistaken dispatch;'+ action.type);
		}
	
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
		dispatch({type: APPLY_DELTA})
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