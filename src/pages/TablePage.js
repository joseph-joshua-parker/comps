//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage(){
    const fruit = [
        {name: 'Orange',    color: 'bg-orange-500', score: 5},
        {name: 'Apple',     color: 'bg-red-500',    score: 4},
        {name: 'Yellow',    color: 'bg-yellow-500', score: 1},
        {name: 'Lime',      color: 'bg-green-500',  score: 3},
    ];

    const keyFn = (datum)=>{
        return datum.name;
    }

    const config = [
        {
            label: 'Name',     
            render: datum => datum.name,
            sortValue: datum => datum.name
        },

        {
            label: 'Color',    
            render: datum => <div className={`p-2 m-3 ${datum.color}`}/>
        },

        {
            label: 'Score',    
            render: datum => datum.score,
            sortValue: datum => datum.score
        },
    ]



    return <div>
        <SortableTable keyFn={keyFn} data={fruit} config={config}/>
    </div>
}

export default TablePage;