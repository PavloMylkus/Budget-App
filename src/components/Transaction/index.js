import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../providers/context';
import { Wrapper, TransactionDate, Value, Comment, Icon, DeleteBtn } from './styles';
import StarFil from '../../assets/img/starf.svg';
import Star from '../../assets/img/star.svg';


const Transaction = ({ transaction: { id, value, date, comment, isStarred }, onDelete, onStarClick }) => {

	const { state } = useContext(AppContext);
	const deleteItem = useCallback(() => onDelete(id), [id]);
	return (
		<Wrapper value={value}>
			<Icon onClick={() => onStarClick(id)}>
				<img src={isStarred ? StarFil : Star} />
			</Icon>

			<TransactionDate>{date}</TransactionDate>
			<Value>{value.toFixed(2)}, {state.currency}</Value>
			<Comment>{comment}</Comment>
			<DeleteBtn onClick={deleteItem}>X</DeleteBtn>
		</Wrapper>
	);
}





Transaction.propTypes = {
	transaction: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.number
	}),
	onStarClick: PropTypes.func
}

Transaction.defaultProps = {
	transaction: {
		label: '',
		value: 0
	}
}

export default Transaction