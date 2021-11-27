import React, { useContext } from 'react';
import Types from '../types/Types';
import CartItem from '../components/CartItem';
import { DataContext } from '../context/DataContext';
import paypal from '../assets/svg/paypal.svg';
import { Link } from 'react-router-dom';

const CartPage = () => {
	const { state, dispatch } = useContext(DataContext);

	const { cart } = state;

	const deleteFromCart = uid => {
		dispatch({ type: Types.RESTORE_STOCK, payload: uid });
		dispatch({ type: Types.REMOVE_FROM_CART, payload: uid });
	};

	// const clearCart = () => {
	// 	dispatch({ type: Types.CLEAR_CART });
	// };

	const increaseQuantity = uid => {
		dispatch({ type: Types.INCREASE_QUANTITY, payload: uid });
		dispatch({ type: Types.SUBTRACT_STOCK, payload: uid });
	};

	const decreaseQuantity = uid => {
		dispatch({ type: Types.DECREASE_QUANTITY, payload: uid });
		dispatch({ type: Types.ADD_STOCK, payload: uid });
	};

	const totalCart = cart.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="container mx-auto mb-7">
			<h1 className="text-4xl mb-1">Bag</h1>
			<hr />

			<div className="flex justify-between flex-wrap break-words">
				<article className="lg:pr-10 lg:w-2/3 w-full">
					{cart.map((item, index) => (
						<CartItem
							key={index}
							data={item}
							deleteFromCart={deleteFromCart}
							increaseQuantity={increaseQuantity}
							decreaseQuantity={decreaseQuantity}
						/>
					))}

					{/* {cart.length > 0 && (
						<button
							onClick={clearCart}
							className="btn-checkout bg-black rounded-full text-white px-5 py-1 mt-5 w-full"
						>
							Clear cart
						</button>
					)} */}
				</article>

				<aside className="lg:w-1/3 leading-10 p-5 w-full">
					<h3 className="text-2xl">Summary</h3>

					<div className="py-3">
						<p className="text-base py-2">Do you have a Promo Code?</p>
						<p className="text-base py-2">Subtotal</p>
						<p className="text-base py-2">Estimated Shipping & Handing</p>
						<p className="text-base py-2">Estimated Tax</p>
					</div>

					<hr />

					<div className="flex items-center justify-between p-3">
						<p className="text-lg">Total</p>
						{totalCart > 0 && (
							<span className="font-bold text-base">$ {totalCart}</span>
						)}
					</div>

					<hr />

					<p className="text-center pt-4 px-4 mx-2">
						<Link to="checkout">
							<button className="btn-checkout bg-black px-5 py-2 rounded-full text-white  w-full">
								Checkout
							</button>
						</Link>
					</p>
					<p className="text-center py-3 px-4 mx-2">
						<button className="bg-gray-200 border border-gray-200 hover:bg-white px-5 py-2 rounded-full text-blue-500  w-full">
							<img
								src={paypal}
								alt="paypal-icon"
								width={75}
								className="py-1.5 mx-auto"
							/>
						</button>
					</p>
				</aside>
			</div>
		</div>
	);
};

export default CartPage;
