import React, { useState } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const BalanceData = ({ children }) => {
	const [balance] = useState(12)

	return (
		children(balance)
	);
}



BalanceData.propTypes = {
	children: PropTypes.func.isRequired
}


export default BalanceData;