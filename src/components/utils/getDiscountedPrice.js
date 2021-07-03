export const getDisountedPrice = (price, discount) => {
	return (price - (price * discount) / 100).toFixed(2);
};
