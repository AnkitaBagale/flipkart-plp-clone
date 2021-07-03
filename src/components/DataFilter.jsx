import { useDataContext } from '../context/DataContextProvider';
import { brandsData, idealForData, sizesData } from '../database';
import { checkIsAlreadyPresent } from './utils';

export const DataFilter = () => {
	const {
		dispatch,
		state: {
			filter: { brands, sizes, idealFor },
		},
	} = useDataContext();

	return (
		<>
			<div className='filter-section'>
				<div className='flex'>
					<h4>FILTER</h4>
					<button
						className='text-link'
						onClick={() => dispatch({ type: 'CLEAR_FILTERS' })}>
						Clear All
					</button>
				</div>
				<h6>Brands</h6>
				{brandsData.map((brand) => {
					return (
						<label key={brand}>
							<input
								onChange={() =>
									dispatch({ type: 'FILTER_BRANDS', payload: { brand } })
								}
								type='checkbox'
								checked={checkIsAlreadyPresent(brands, brand)}
							/>
							{brand}
						</label>
					);
				})}
				<hr />
				<h6>Sizes</h6>
				{sizesData.map((size) => {
					return (
						<label key={size}>
							<input
								onChange={() =>
									dispatch({ type: 'FILTER_SIZES', payload: { size } })
								}
								type='checkbox'
								checked={checkIsAlreadyPresent(sizes, size)}
							/>
							{size}
						</label>
					);
				})}

				<hr />
				<h6>Ideal For</h6>
				{idealForData.map((type) => {
					return (
						<label key={type}>
							<input
								onChange={() =>
									dispatch({ type: 'FILTER_IDEAL_FOR', payload: { type } })
								}
								type='checkbox'
								checked={checkIsAlreadyPresent(idealFor, type)}
							/>
							{type}
						</label>
					);
				})}

				<hr />
			</div>
		</>
	);
};
