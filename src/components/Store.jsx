import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import Types from '../types/Types';
import { DataContext } from '../context/DataContext';

const Store = () => {
	const { state, dispatch } = useContext(DataContext);

	const { products } = state;

	const addToCart = uid => {
		dispatch({ type: Types.ADD_TO_CART, payload: uid });
		dispatch({ type: Types.SUBTRACT_STOCK, payload: uid });
	};

	return (
		<div>
			<article className="grid sm:grid-cols-2 lg:grid-cols-3">
				{products?.map(product => (
					<ProductItem key={product.uid} data={product} addToCart={addToCart} />
				))}
			</article>
		</div>
	);
};

export default Store;
