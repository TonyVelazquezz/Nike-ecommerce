import React, { createContext, useReducer } from 'react';
import { storeReducer, storeInitialState } from '../reducer/storeReducer';

export const DataContext = createContext();

// const init = () => {
// 	return JSON.parse(localStorage.getItem('state')) || [];
// };

// const storeLocalStorage = JSON.parse(localStorage.getItem('state') || []);

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(storeReducer, storeInitialState);

	// useEffect(() => {
	// 	localStorage.setItem('state', JSON.stringify(state));
	// }, [state]);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};
