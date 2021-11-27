import React from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const CartItem = ({
	data,
	deleteFromCart,
	increaseQuantity,
	decreaseQuantity,
}) => {
	const { uid, min_img, name, price, quantity } = data;

	return (
		<div className="border-b pb-2 pt-4 px-2 w-full">
			<div className="flex flex-nowrap w-full">
				<img
					src={min_img[0].url}
					alt="preview"
					className="h-full pr-3 lg:max-w-full w-1/4"
				/>

				<div className="lg:w-3/5 w-1/2">
					<h4 className="">{name}</h4>
					<p className="text-gray-500">Men's Full-Zip Hoodie</p>
					<p className="text-gray-500">Charcoal Heather/ Anthracite/ White</p>

					<div className="flex gap-2 items-center text-gray-500 ">
						<h3>Quantity</h3>
						<MdKeyboardArrowDown
							onClick={() => decreaseQuantity(uid)}
							className="cursor-pointer"
						/>
						{quantity}
						<MdKeyboardArrowUp
							onClick={() => increaseQuantity(uid)}
							className="cursor-pointer"
						/>
					</div>

					<button
						// onClick={() => deleteFromCart(uid)}
						className="btn text-gray-600 pr-3 py-1 underline"
					>
						Move to favorites
					</button>
					<button
						onClick={() => deleteFromCart(uid)}
						className="btn text-gray-600 pr-3 py-1 underline"
					>
						Remove
					</button>
				</div>

				<div className="w-1/5">
					<h5 className="break-normal px-2 text-right">${price * quantity}.00</h5>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
