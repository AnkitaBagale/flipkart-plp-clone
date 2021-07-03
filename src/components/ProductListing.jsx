import { DataFilter } from './DataFilter';
import { DataSortBy } from './DataSortBy';
import { ProductCard } from './ProductCard';

import './styles.css';
import { useGetFilteredData } from './utils';

export const ProductListing = () => {
	const products = useGetFilteredData();

	return (
		<>
			<div className='grid-30-70'>
				<div>
					<DataFilter />
				</div>
				<div>
					<h4>Clothing and Accessories</h4>
					<DataSortBy />
					{products.length === 0 ? (
						<h6>No products found</h6>
					) : (
						<div className='grid-4-column'>
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};
