import React, { createContext, useEffect, useReducer } from 'react';
import { storeInitialState, storeReducer } from '../reducer/storeReducer';

export const DataContext = createContext();

const init = () => {
	const state = window.localStorage.getItem('state');
	if (state) {
		return JSON.parse(localStorage.getItem('state'));
	} else {
		return [];
	}
};

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(storeReducer, storeInitialState, init);

	useEffect(() => {
		window.localStorage.setItem('state', JSON.stringify(state));
	}, [state]);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};
