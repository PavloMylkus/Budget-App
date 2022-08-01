import React from 'react';
import Transaction from '../Transaction';
import PropTypes from 'prop-types';


const Transactions = ({ transactions = [], onDelete, onStarClick }) => {
	return transactions.map((transaction) => {
		return (
			<Transaction
				key={transaction.id}
				transaction={transaction}
				onDelete={onDelete}
				onStarClick={onStarClick} />
		)
	}
	)
}






Transaction.propTypes = {
	transactions: PropTypes.array
}
Transaction.defaultProps = {
	transactions: []
}
export default Transactions;