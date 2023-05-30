import Button from "./Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';


const handleClick = ()=>{
	console.log('fgjnf')
}

const App = ()=>{
	return (
		<div>
			<div>
				<Button primary onClick={handleClick}>
					<GoBell/>
					Ring ring
				</Button>
			</div>
			<div>
				<Button success rounded>
					<GoCloudDownload/>
					Upload
				</Button>
			</div>
			<div>
				<Button danger primary>
					<GoDatabase/>
					Save
				</Button>
			</div>
			<div>
				<Button></Button>
			</div>
		</div>
	)
}

export default App;