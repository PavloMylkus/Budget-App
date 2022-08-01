import React, { useState, useEffect, useCallback } from 'react';
import { STATUES } from './constants';
import { getData, addItem, deleteItem, updateItem, getItems } from './utils/indexdb'



export const useBolleanToggle = () => {
	const [status, setStatus] = useState(false);

	const handleStatusChange = () => {
		setStatus((currentStatus) => !currentStatus)
	}

	return {
		status,
		handleStatusChange
	}
}


export const useData = () => {
	const [state, setState] = useState({
		transactions: [],
		error: '',
		status: STATUES.IDLE
	});

	useEffect(() => {
		setState({
			...state,
			status: STATUES.PENDING
		})
		getItems().then((transactions) => {
			setState({
				...state,
				transactions,
				status: STATUES.SUCCESS
			})
		}).catch((e) => {
			setState({
				...state,
				transactions: [],
				status: STATUES.ERROR,
				error: e
			})
		})
	}, [])

	const pushTransaction = useCallback((data) => {
		const transaction = {
			...data,
			value: +data.value,
			id: Date.now()
		}
		setState((state) => ({
			...state,
			transactions: [transaction, ...state.transactions]
		}));
		addItem(transaction)
	}, [setState])



	const onDelete = useCallback((id) => {
		setState((state) => ({
			...state,
			transactions: state.transactions.filter((item) => item.id !== id)
		}));

		deleteItem(id);
	}, [setState]);



	const onStarClick = useCallback((id) => {
		const item = state.transactions.find((i) => i.id === id);

		updateItem({
			...item,
			isStarred: !item.isStarred
		}).then(() => {
			setState((state) => ({
				...state,
				transactions: state.transactions.map((item) => item.id !== id ? item : {
					...item,
					isStarred: !item.isStarred
				})
			}))
		})

	}, [setState, state])





	return {
		...state,
		pushTransaction,
		onDelete,
		onStarClick
	}
}