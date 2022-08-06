import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import Form from '../Form';

const Button = styled.button`
	position: fixed;
	right: 50px;
	bottom: 50px;
	width: 75px;
	height: 75px;
	font-size: 52px;
	color: gray;
	background-color:#fff;
	border-radius:50% ;
	border: 2px solid gray;
	display: flex;
	outline: none;
	
	align-items: center;
	justify-content: center;
	opacity: 1;
	transition: all .3s;

	&:hover{
		cursor: pointer;
		color: #000;
		border: 2px solid #000;
	}
`;


const ChangeBalance = ({ onChange }) => {
	const [openModal, setOpenModal] = useState(false)


	return (
		<>
			<Button onClick={() => setOpenModal(true)}>+</Button>
			<Modal open={openModal} onClose={() => setOpenModal(false)}>
				<Form onChange={onChange} onCloseFormModal={() => setOpenModal(false)} />
			</Modal>

		</>
	);
}

export default ChangeBalance;