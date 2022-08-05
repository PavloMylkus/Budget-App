import React from 'react';
import ReactDOM from 'react-dom/client';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './components/App';
import { AppContextProvider } from './providers/context/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</React.StrictMode>


);

serviceWorkerRegistration.register();

