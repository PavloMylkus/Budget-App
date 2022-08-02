import React, { useState } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions';
import { Wrapper } from './styles';
import ErrorBoundary from '../ErrorBoundary'
import { STATUES } from '../../constants';
import { useData } from '../../hooks';
import { deleteItem } from '../../utils/indexdb';
import ChangeBalance from '../ChangeBalance';

const Home = () => {

	const [balance, setBalance] = useState(0);


	const { transactions, status, pushTransaction, onDelete, onStarClick } = useData();



	const onChange = (transaction) => {
		pushTransaction(transaction)

		setBalance(balance + Number(transaction.value))

	}


	return (
		<ErrorBoundary>
			<Wrapper>
				<Balance balance={balance} />
				<ChangeBalance onChange={onChange} />
				<hr />

				{status === STATUES.PENDING ? (
					<div>Loading...</div>
				) : null}
				{status === STATUES.SUCCESS ? (
					<Transactions transactions={transactions}
						onDelete={onDelete}
						onStarClick={onStarClick} />

				) : null}

			</Wrapper>
		</ErrorBoundary>

	)


}


export default Home;
