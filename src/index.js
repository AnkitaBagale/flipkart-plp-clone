import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { DataContextProvider } from './context/DataContextProvider';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<DataContextProvider>
				<App />
			</DataContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
