import { render } from '@testing-library/react';
import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';


const parent = document.getElementById('modal');
const Portal = ({ children }) => {
	const el = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		parent.appendChild(el);
		return () => {
			parent.removeChild(el);
		}
	}, [])

	return ReactDOM.createPortal(
		children,
		el
	);
}


export default Portal;