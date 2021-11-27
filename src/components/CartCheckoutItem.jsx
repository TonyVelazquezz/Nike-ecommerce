import React from 'react';

const CartCheckoutItem = ({ data }) => {
	const { min_img, name, price, quantity } = data;

	return (
		<div className="p-2 border-b w-full">
			<div className="flex p-2 w-full">
				<img
					src={min_img[0].url}
					alt="preview"
					className="pt-3 pr-4 h-full lg:max-w-full w-1/3"
				/>

				<div className="w-full">
					<h4 className="">{name}</h4>
					<p className="text-gray-500">Men's Full-Zip Hoodie</p>
					<p className="text-gray-500">Charcoal Heather/ Anthracite/ White</p>

					<div className="text-gray-500">
						Qty: {quantity} @$ {price}.00
					</div>
					<p className="text-gray-500">${price * quantity}.00</p>
				</div>
			</div>
		</div>
	);
};

export default CartCheckoutItem;
