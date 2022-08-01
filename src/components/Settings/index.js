import React, { useContext, memo, useCallback, useMemo, useState } from 'react';
import { AppContext } from '../../providers/context';
import { useBolleanToggle } from '../../hooks';
import { LOCALES } from '../../providers/i18n';
import { saveToStorage } from '../../utils/sessionStorage';


const Test = memo(({ data }) => {
	console.log('rendering')
	return <div>{JSON.stringify(data)}</div>
})

const Settings = () => {
	const { state, dispatch } = useContext(AppContext);
	const { status, handleStatusChange } = useBolleanToggle();
	//const [isAdvancedSettingsShow, setIsAdvancedSettingsShow] = useState(false)


	const onChange = (e) => {
		const { value } = e.target;

		dispatch({
			type: 'changeCurrency',
			currency: value
		})
	}

	const onChangeLocale = (e) => {
		const { value } = e.target;
		dispatch({
			type: 'setLocale',
			locale: value
		})

		saveToStorage('locale', value)
	}

	const data = useMemo(() => [2], []);
	return (<>
		<h1>Налаштування</h1>
		<Test data={data} />
		<div>
			<form>
				<div>
					<label>
						Валюта:
						<select name='currency'
							onChange={onChange}
							value={state.currency}>
							<option value={'UAH'}>Гривня</option>
							<option value='USD'>Доллар США</option>
							<option value='EUR'>Євро</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						Мова:
						<select name='locale'
							onChange={onChangeLocale}
							value={state.locale}>
							<option value={LOCALES.UKRAINIAN}>Українська</option>
							<option value={LOCALES.ENGLISH}>English</option>

						</select>
					</label>
				</div>

			</form>
		</div>
		<div>
			<button onClick={handleStatusChange}>Розширені Налаштування</button>
			{status ?
				(<div>
					<h2>Розширені Налаштування</h2>
					<p>...</p>
				</div>)
				: null}

		</div>
	</>

	);
}

export default Settings;