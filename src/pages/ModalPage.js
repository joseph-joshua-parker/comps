import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage(){
	const [showModal, setShowModal] = useState(false);
	const handleClick = ()=>{
		setShowModal(true);
	}

	const handleDismiss = () =>{
		console.log('dimissed');
		setShowModal(false);
	}

	const actionBar = (
		<div>
			<Button primary>I accept</Button>
		</div>);

	const modal = (
		<Modal 
			onDismiss={handleDismiss}
			actionBar={actionBar}>
				
			<p>
				Here is an important thing
			</p>

		</Modal>
	)

	return (
		<div>
			<Button onClick={handleClick} primary>Open Modal</Button>
			{showModal && modal }
		</div>
	);
}

export default ModalPage;