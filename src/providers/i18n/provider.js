import React, { useContext } from 'react';
import { AppContext } from '../context';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';
import messages from './messages';
import { LOCALES } from './constants';

export const IntlAppProvider = ({ children }) => {
	const { state } = useContext(AppContext)

	return (
		<IntlProvider messages={flatten(messages[state.locale])} locale={state.locale} defaultLocale={LOCALES.ENGLISH}>
			{children}
		</IntlProvider>
	)
}

export default IntlAppProvider;