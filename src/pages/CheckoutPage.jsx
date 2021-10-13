import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import 'react-credit-cards/es/styles-compiled.css';
import CartCheckoutItem from '../components/CartCheckoutItem';
import PaymentForm from '../components/PaymentForm';

const CheckoutPage = () => {
	const { state } = useContext(DataContext);
	const { cart } = state;

	const totalCart = cart.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="container mx-auto">
			<h1 className="text-4xl mb-1">Checkout</h1>
			<hr />

			<div className="flex flex-wrap p-3 break-words">
				<article className="border border-gray-200 mb-7 mt-4 lg:w-3/5 w-full">
					<p className="bg-black font-bold mb-4 p-3 text-lg text-white w-full">
						PAYMENT
					</p>
					<PaymentForm />
				</article>

				<aside className="border leading-10 mb-7 ml-4 mt-4 lg:w-1/3 w-full">
					<h3 className="bg-gray-200 font-bold px-3">IN YOUR BAG</h3>

					<div className="p-3">
						<div className="flex justify-between">
							<p className="text-base py-2 text-color-gray">Subtotal</p>
							{totalCart > 0 && (
								<span className="font-bold text-base">$ {totalCart}.00</span>
							)}
						</div>
						<div className="flex justify-between">
							<p className="text-base py-2 text-color-gray">Estimated Shipping</p>
							{totalCart > 0 && <span className="text-base">$0.00</span>}
						</div>
						<div className="flex justify-between">
							<p className="text-base py-2 text-color-gray">Estimated Tax</p>
							{totalCart > 0 && <span className="text-base">$0.00</span>}
						</div>
					</div>

					<hr />

					<div className="flex items-center justify-between p-3">
						<p className="text-lg">Total</p>
						{totalCart > 0 && (
							<span className="font-bold text-base text-orange">$ {totalCart}.00</span>
						)}
					</div>

					<hr />

					{cart.map((item, index) => (
						<CartCheckoutItem key={index} data={item} />
					))}
				</aside>
			</div>
		</div>
	);
};

export default CheckoutPage;
