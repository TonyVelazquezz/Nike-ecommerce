import React, { createContext, useEffect, useReducer } from 'react';
import { storeReducer, storeInitialState } from '../reducer/storeReducer';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(storeReducer, storeInitialState);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};
