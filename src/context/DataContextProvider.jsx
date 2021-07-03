import { createContext, useContext, useReducer, useState } from 'react';
import { dataReducer, initialState } from './data.reducer';

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataReducer, initialState);
	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => useContext(DataContext);
