import {GoChevronDown, GoChevronLeft} from 'react-icons/go';
import {useState} from 'react';

function Accordion({items}){
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) =>{
		setExpandedIndex((current)=>{
			if(current === nextIndex) 	return -1;
			else 						return nextIndex;
		})

	}

	const renderedItems = items.map((item, index)=>{
		const isExpanded = index === expandedIndex;

		const icon = <span className="text-2xl"> {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>
		return (
			<div key= {item.id}>
				<div 
				className="flex justify-between p3 bg-gray-50 border-b items-center" 
				onClick={()=>handleClick(index)}
				>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div>{item.content}</div>}
			</div>


		)
		
	})
	
	return <div>{renderedItems}</div>
}

export default Accordion;