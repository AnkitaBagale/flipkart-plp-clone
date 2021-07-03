import { useDataContext } from '../context/DataContextProvider';

export const DataSortBy = () => {
	const {
		state: {
			filter: { sortBy },
		},
		dispatch,
	} = useDataContext();

	return (
		<>
			<div>
				<span>Sort By: </span>
				<label>
					<input
						type='radio'
						checked={sortBy === 'LOW_TO_HIGH_PRICE'}
						onChange={() => {
							dispatch({
								type: 'SORT_BY',
								payload: { sortBy: 'LOW_TO_HIGH_PRICE' },
							});
						}}
					/>
					Low to High Price
				</label>
				<label>
					<input
						type='radio'
						checked={sortBy === 'HIGH_TO_LOW_PRICE'}
						onChange={() => {
							dispatch({
								type: 'SORT_BY',
								payload: { sortBy: 'HIGH_TO_LOW_PRICE' },
							});
						}}
					/>
					High to Low Price
				</label>
			</div>
		</>
	);
};
