import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentForm = () => {
	const [state, setState] = useState({
		number: '',
		name: '',
		cvc: '',
		expiry: '',
		focus: '',
	});

	const handleFocus = e => {
		setState({
			...state,
			focus: e.target.name,
		});
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	// const submitPayment = () => {
	// 	console.log('name => ', state.name);
	// 	console.log('number => ', state.number);
	// 	console.log('expiry => ', state.expiry);
	// 	console.log('cvc => ', state.cvc);
	// 	alert(JSON.stringify(state));
	// };

	return (
		<div className="p-4">
			<Cards
				cvc={state.cvc}
				expiry={state.expiry}
				focused={state.focus}
				name={state.name}
				number={state.number}
			/>
			<form>
				<div className="w-full pr-3 py-2">
					<input
						type="text"
						className="border p-2 w-full"
						name="number"
						maxLength="16"
						placeholder="Card Number"
						onChange={handleChange}
						onFocus={handleFocus}
					/>
				</div>

				<div className="w-full pr-3 py-2">
					<input
						type="text"
						className="border p-2 w-full"
						name="name"
						maxLength="30"
						placeholder="Nombre"
						onChange={handleChange}
						onFocus={handleFocus}
					/>
				</div>

				<div className="w-3/4 pr-2 py-2">
					<input
						type="text"
						className="border p-2 w-full"
						name="expiry"
						maxLength="4"
						placeholder="Expire"
						onChange={handleChange}
						onFocus={handleFocus}
					/>
				</div>

				<div className="w-1/4 py-2">
					<input
						type="text"
						className="border p-2 w-full"
						name="cvc"
						maxLength="4"
						placeholder="CVC"
						onChange={handleChange}
						onFocus={handleFocus}
					/>
				</div>
				<p className="text-right">
					<button
						type="button"
						className="submit font-bold mr-3 px-10 py-2 text-white w-full"
						// onClick={submitPayment}
					>
						Pay
					</button>
				</p>
			</form>
		</div>
	);
};

export default PaymentForm;
