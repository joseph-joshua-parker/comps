import Table from "../components/Table";

function TablePage(){
    const fruit = [
        {name: 'Orange',    color: 'bg-orange-500', score: 5},
        {name: 'Apple',     color: 'bg-red-500',    score: 4},
        {name: 'Yellow',    color: 'bg-yellow-500', score: 1},
        {name: 'Lime',      color: 'bg-green-500',  score: 3},
    ];

    const config = [
        {label: 'Name',     render: datum => datum.name},
        {label: 'Color',    render: datum => <div className={`p-2 m-3 ${datum.color}`}/>},
        {label: 'Score',    render: datum => datum.score},
    ]



    return <div>
        <Table data={fruit} config={config}></Table>
    </div>
}

export default TablePage;