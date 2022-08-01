import React, { useContext } from 'react';
import { AppContext } from '../../providers/context';
import { THEMES } from '../../providers/themes/themeList';
import { saveToStorage } from '../../utils/sessionStorage';

const ThemeSwitch = () => {
	const { state, dispatch } = useContext(AppContext);

	const setTheme = (themeName) => {
		dispatch({
			type: 'setTheme',
			themeName
		});

		saveToStorage('themeName', themeName)
	}
	return (
		<div>
			<button onClick={() => setTheme(THEMES.LIGHT)}>LIGHT</button>
			<button onClick={() => setTheme(THEMES.DARK)}> DARK</button>
		</div>
	);
}


export default ThemeSwitch;