import React, { createContext, useEffect, useReducer } from 'react';
import { storeInitialState, storeReducer } from '../reducer/storeReducer';
import Types from '../types/Types';

export const DataContext = createContext();

const init = () => {
	const storeState = JSON.parse(localStorage.getItem('state'));
	if (storeState) {
		return JSON.parse(localStorage.getItem('state'));
	} else {
		return localStorage.setItem('state', JSON.stringify(storeInitialState));
	}
};

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(storeReducer, storeInitialState, init);

	useEffect(() => {
		const handleFetchData = async () => {
			try {
				const API = 'https://nike-ecommerce.herokuapp.com/nikes';
				const response = await fetch(API);
				const payload = await response.json();
				dispatch({ type: Types.ADD_PRODUCTS, payload });
			} catch (error) {
				console.error(error);
			}
		};
		handleFetchData();
	}, []);

	useEffect(() => {
		localStorage.setItem('state', JSON.stringify(state));
	}, [state]);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};
