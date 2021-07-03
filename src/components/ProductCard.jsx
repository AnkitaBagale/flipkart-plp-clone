import { getDisountedPrice } from './utils';

export const ProductCard = ({ product }) => {
	return (
		<div>
			<img alt='product' className='card-img' src={product?.image} />
			<div className='text-container'>
				<p className='product-brand'>{product?.brand}</p>
				<h6 className='product-name'>{product?.name}</h6>
				{product.flipkart_assured && <p>fassured</p>}
				<p className='product-name'>
					Rs.
					{getDisountedPrice(product?.price, product?.discount)}{' '}
					{product?.discount > 0 && (
						<>
							<span className='strike'> {product?.price}</span>{' '}
							<span>{product?.discount}% off</span>
						</>
					)}
				</p>
				<p>
					Sizes:{' '}
					{product.sizes.map((size) => (
						<span key={size}>{size} </span>
					))}
				</p>
				<p>Ideal for: {product.ideal_for}</p>
			</div>
		</div>
	);
};
