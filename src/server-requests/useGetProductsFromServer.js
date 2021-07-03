import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDataContext } from '../context/DataContextProvider';

export const useGetProductsFromServer = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { dispatch } = useDataContext();

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get('products.json');
				dispatch({ type: 'SET_PRODUCTS', payload: data });
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		})();
	}, []);

	return { loading, error };
};
