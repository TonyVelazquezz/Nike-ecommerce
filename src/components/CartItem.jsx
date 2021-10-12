import React from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const CartItem = ({
	data,
	deleteFromCart,
	increaseQuantity,
	decreaseQuantity,
}) => {
	const { id, min_img, name, price, quantity } = data;

	return (
		<div className="p-2 m-2 border-b w-full">
			<div className="flex p-2 w-full">
				<img src={min_img} alt="preview" className="mr-4 h-full" />

				<div className="w-3/5">
					<h4 className="">{name}</h4>
					<p className="text-gray-500">Men's Full-Zip Hoodie</p>
					<p className="text-gray-500">Charcoal Heather/ Anthracite/ White</p>

					<div className="flex gap-2 items-center text-gray-500 ">
						<h3>Quantity</h3>
						<MdKeyboardArrowDown
							onClick={() => decreaseQuantity(id)}
							className="cursor-pointer"
						/>
						{quantity}
						<MdKeyboardArrowUp
							onClick={() => increaseQuantity(id)}
							className="cursor-pointer"
						/>
					</div>

					<button
						// onClick={() => deleteFromCart(id)}
						className="btn text-gray-600 pr-3 py-1 underline"
					>
						Move to favorites
					</button>
					<button
						onClick={() => deleteFromCart(id)}
						className="btn text-gray-600 pr-3 py-1 underline"
					>
						Remove
					</button>
				</div>

				<div className="w-1/5">
					<h5 className="text-right">${price * quantity}.00</h5>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
