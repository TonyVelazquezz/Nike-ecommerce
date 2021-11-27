import React from 'react';

const ProductItem = ({ data, addToCart }) => {
	const { uid, img, name, price, stock } = data;

	return (
		<div className="p-2 m-2">
			<img src={img[0].url} alt="" />
			<h4 className="">{name}</h4>
			{stock > 0 ? (
				<h5 className="font-bold">
					stock:<span className="font-normal"> {stock}</span>
				</h5>
			) : (
				<h5 className="text-red-500">fuera de stock !</h5>
			)}

			<h5 className="font-bold">
				price:<span className="font-normal"> ${price}</span>
			</h5>

			<p className="text-left">
				<button
					onClick={() => addToCart(uid)}
					className="btn-checkout bg-black rounded-full text-white px-10 py-1 mt-2"
				>
					Add to Bag
				</button>
			</p>
		</div>
	);
};

export default ProductItem;
