import {Fragment} from 'react';


function Table({data, config, keyFn}){
    
    
    
    const renderedHeaders = config.map((col)=>{
        if(col.header)  return <Fragment key={col.label}>{col.header()}</Fragment>;
        else            return <th key='col.label'>{col.label}</th>
    });

    const renderedRows = data.map((datum)=>{
        const renderedCols = config.map(col=>{
            return <td key={col.label} className='p-3'>{col.render(datum)}</td>
        })


        return (
            <tr className='border-b' key={keyFn(datum)}>
                {renderedCols}      
            </tr>
        );
    }) 
    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
            
        </table>
    )
}

export default Table;