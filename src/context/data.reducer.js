export const initialState = {
	products: [],
	filter: {
		brands: [],
		sizes: [],
		idealFor: [],
		sortBy: '',
	},
};
export const dataReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_PRODUCTS': {
			return { ...state, products: payload.products };
		}
		case 'FILTER_BRANDS': {
			const isAlreadyAdded = state.filter.brands.includes(payload.brand);

			return {
				...state,
				filter: {
					...state.filter,
					brands: isAlreadyAdded
						? state.filter.brands.filter((brand) => brand !== payload.brand)
						: [...state.filter.brands, payload.brand],
				},
			};
		}

		case 'FILTER_SIZES': {
			const isAlreadyAdded = state.filter.sizes.includes(payload.size);

			return {
				...state,
				filter: {
					...state.filter,
					sizes: isAlreadyAdded
						? state.filter.sizes.filter((size) => size !== payload.size)
						: [...state.filter.sizes, payload.size],
				},
			};
		}

		case 'FILTER_IDEAL_FOR': {
			const isAlreadyAdded = state.filter.idealFor.includes(payload.type);

			return {
				...state,
				filter: {
					...state.filter,
					idealFor: isAlreadyAdded
						? state.filter.idealFor.filter((type) => type !== payload.type)
						: [...state.filter.idealFor, payload.type],
				},
			};
		}
		case 'CLEAR_FILTERS': {
			return {
				...state,
				filter: {
					brands: [],
					sizes: [],
					idealFor: [],
					sortBy: '',
				},
			};
		}

		case 'SORT_BY': {
			return {
				...state,
				filter: { ...state.filter, sortBy: payload.sortBy },
			};
		}

		default: {
			throw new Error('Unknown action on dispatch');
		}
	}
};
