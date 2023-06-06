
import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage(){

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
            </div>
}

export default DropdownPage;