import { useDataContext } from '../../context/DataContextProvider';
import { getDisountedPrice } from './getDiscountedPrice';

export const useGetFilteredData = () => {
	const {
		state: {
			products,
			filter: { sizes, brands, idealFor, sortBy },
		},
	} = useDataContext();

	console.log({ products });

	let filteredData = [...products];

	if (sizes.length !== 0) {
		filteredData = products.filter((product) => {
			let flag = false;
			sizes.forEach((size) => {
				if (product.sizes.includes(size)) {
					flag = true;
				}
			});

			return flag;
		});
	}

	if (brands.length !== 0) {
		filteredData = filteredData.filter((product) =>
			brands.includes(product.brand),
		);
	}

	if (idealFor.length !== 0) {
		filteredData = filteredData.filter((product) =>
			idealFor.includes(product.ideal_for),
		);
	}

	if (sortBy !== '') {
		filteredData = [...filteredData].sort((product1, product2) => {
			return sortBy === 'LOW_TO_HIGH_PRICE'
				? getDisountedPrice(product1.price, product1.discount) -
						getDisountedPrice(product2.price, product2.discount)
				: getDisountedPrice(product2.price, product2.discount) -
						getDisountedPrice(product1.price, product1.discount);
		});
	}

	return filteredData;
};
