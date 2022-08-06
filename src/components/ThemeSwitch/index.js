import React, { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../providers/context';
import { THEMES } from '../../providers/themes/themeList';
import { saveToStorage } from '../../utils/sessionStorage';
import styled from 'styled-components';


const SwitcherBtnLight = styled.button`
	background: ${({ theme }) => theme.switchBtnColorLight};
	color: ${({ theme }) => theme.switchBtnTextColorlight};
	border: 1px solid #000;
	border-radius: 8px;
	padding: 4px;
	margin-left: 5px;
	display: ${({ theme }) => theme.displayOn};
`;
SwitcherBtnLight.displayName = 'SwitcherBtnLight';


const SwitcherBtnDark = styled.button`
	background: ${({ theme }) => theme.switchBtnColorDark};
	color: ${({ theme }) => theme.switchBtnTextColorDark};
	border: 1px solid #000;
	border-radius: 8px;
	padding: 4px;
	margin-left: 5px;
	display: ${({ theme }) => theme.displayOff};
`;
SwitcherBtnDark.displayName = 'SwitcherBtnDark';



const ThemeSwitch = () => {
	const { state, dispatch } = useContext(AppContext);
	const [themeName, setBtnColor] = useState(THEMES.LIGHT)

	const setTheme = (themeName) => {


		dispatch({
			type: 'setTheme',
			themeName
		});

		saveToStorage('themeName', themeName);
	}

	return (
		<div>
			<SwitcherBtnLight onClick={() => setTheme(THEMES.LIGHT)}> LIGHT</SwitcherBtnLight>
			<SwitcherBtnDark onClick={() => setTheme(THEMES.DARK)}> DARK</SwitcherBtnDark>
		</div >
	);
}


export default ThemeSwitch;