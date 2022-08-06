import React, { memo, useMemo, useState } from 'react';
import withProfiler from '../HOCs/withProfiler';
import { FormattedMessage } from 'react-intl';


const Clicker = ({ children }) => {
	const [n, setN] = useState(0)
	return (
		<div data-count={n}>
			{children}
			<p>Cliked {n} times</p>
			<button onClick={() => setN(n + 1)}>Click me</button>
		</div>
	)
}

const Statistics = () => {


	return (
		<>
			<FormattedMessage id="statistics.title" />
			<Clicker />
		</>


	);
}

export default withProfiler(Statistics, 'Statistics');