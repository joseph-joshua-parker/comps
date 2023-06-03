import Accordion from "./components/Accordion";

const App = ()=>{
	const items = [
		{
			id:'1',
			label: 'Can I use React?',
			content: "Of course"
		},
		{
			id:'2',
			label: 'Can I use React?',
			content: "Of course"
		},
		{
			id: '3',
			label: 'Can I use React?',
			content: "Of course"
		},
	]

	return (
		<Accordion/>
	)
}

export default App;