import { useState } from "react";
import Table from "./Table"
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';

function SortableTable(props){
	const {config, data} = props;
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);
	const [sortedData, setSortedData] = useState(data);


	const handleClick = label => {
		if(sortOrder === null){
			console.log(label);
			setSortOrder('asc');
			setSortBy(label);
		}
		else if(sortOrder === 'asc'){
			console.log('desc');
			setSortOrder('desc');
			setSortBy(label);
		}
		else if(sortOrder === 'desc'){
			console.log(null);
			setSortOrder(null);
			setSortBy(null);
		}
	


		if(sortOrder && sortBy){
			const {sortValue} = config.find(col => col.label === sortBy);
	
			setSortedData([...data].sort((a, b)=>{
				const aVal = sortValue(a);
				const bVal = sortValue(b);

				const reverseOrder = sortOrder === 'asc' ? 1 : -1;

				if(typeof aVal === 'string')    return aVal.localeCompare(bVal) * reverseOrder;
				else                            return (aVal - bVal) * reverseOrder;
			}))

	
		}	
	}




	const augConfig = config.map((col)=>{
		if(!col.sortValue)	return col;
		else	return {
			...col,
			header: () => (
				<th onClick={()=>handleClick(col.label)}>
					<div className="flex items-center">
						{getIcons(col.label, sortBy, sortOrder)}
						{col.label}
					</div>
				</th>
			)
		}
	})


	return <Table {...props} data={sortedData} config={augConfig}/>

}

function getIcons(label, sortBy, sortOrder){
	if(label !== sortBy)	return <div><GoArrowSmallUp/><GoArrowSmallDown/></div>;
	else if(sortOrder === 'asc') return <div><GoArrowSmallUp/></div>;
	else if(sortOrder === 'desc') return <div><GoArrowSmallDown/></div>
}

export default SortableTable