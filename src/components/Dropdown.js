import {useState, useEffect, useRef} from 'react';
import {GoChevronDown} from 'react-icons/go';
import Panel from './Panel';

function Dropdown({options, value, onChange}){
	const [isOpen, setIsOpen] = useState(false);
	const thisEl = useRef();

	useEffect(()=>{
		const handler = (event)=>{
			if(!thisEl.current)	return;

			if(!thisEl.current.contains(event.target))
				setIsOpen(false);
		}

		document.addEventListener('click', handler, true)


		const cleanup = () => document.removeEventListener('click', handler);
		return cleanup; 

	},[])



	const handleSelect = (option)=>{
		onChange(option);
		setIsOpen(false);
	}

	const renderedOptions = options.map((option)=> {
		return <div
					className="hover:bg-sky-100 rounded cursor-pointer p-1"
				 	key={option.label}
					onClick={()=>handleSelect(option)}
				>
						{option.label}
				</div>

	})

	const handleDropdownToggle = () => setIsOpen(!isOpen);
	const selectionHeader = value?.label || 'Make Selection';

	return (
		<div ref={thisEl} className="w-48 relative">
			<Panel className="flex justify-between items-center cursor-pointer" 
			onClick={handleDropdownToggle}>
				{selectionHeader}
				<GoChevronDown className="text-lg"/>
			</Panel>

			{isOpen && <Panel className="absolute top-full border">
							{renderedOptions}
						</Panel>
			}

		</div>
	)
}

export default Dropdown;