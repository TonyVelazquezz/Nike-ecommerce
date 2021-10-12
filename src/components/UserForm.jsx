import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserForm = () => {
	const [success, setSuccess] = useState(false);

	return (
		<>
			<div className="p-4">
				<Formik
					initialValues={{
						name: '',
						lastName: '',
						address: '',
						email: '',
						cardNumber: '',
						CVC: '',
					}}
					validate={users => {
						const errors = {};

						//first name validation
						if (!users.name) {
							errors.name = 'Please, enter your first name';
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(users.name)) {
							errors.name = 'The name can only contain letters and spaces';
						}

						//address validation
						if (!users.address) {
							errors.address = 'Please, enter a valid address';
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(users.address)) {
							errors.address = 'The lastName can only contain letters and spaces';
						}

						//email validation
						if (!users.email) {
							errors.email = 'Please, enter a email';
						} else if (
							!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(users.email)
						) {
							errors.email =
								'The name can only contain letters, numbers, dots, and underscores';
						}

						return errors;
					}}
					onSubmit={(user, { resetForm }) => {
						console.log(user);
						// console.log('message submitted');

						resetForm();
						setSuccess(true);
						setTimeout(() => setSuccess(false), 3000);
					}}
				>
					{({ errors, values }) => (
						<Form>
							<div className="flex flex-wrap">
								<div className="w-full pr-3 py-2">
									<Field
										type="text"
										name="name"
										maxLength="30"
										placeholder="Full Name"
										className="border p-2 w-full"
									/>
									<ErrorMessage
										name="name"
										component={() => (
											<div className="text-sm text-red-500">{errors.name}</div>
										)}
									/>
								</div>

								<div className="w-1/2 pr-3 py-2">
									<Field
										type="text"
										name="address"
										placeholder="Address"
										className="border p-2 w-full"
									/>
									<ErrorMessage
										name="address"
										component={() => (
											<div className="text-sm text-red-500">{errors.address}</div>
										)}
									/>
								</div>
								<div className="w-1/2 py-2">
									<Field
										type="email"
										name="email"
										placeholder="Example: name@email.com"
										className="border p-2 w-full"
									/>
									<ErrorMessage
										name="email"
										component={() => <div className="error">{errors.email}</div>}
									/>
								</div>
								<div className="w-3/4 pr-2 py-2">
									<Field
										type="text"
										name="cardNumber"
										maxLength="16"
										placeholder="Enter your card number"
										className="border p-2 w-full"
									/>
								</div>
								<div className="w-1/4 py-2">
									<Field
										type="numbers"
										name="CVC"
										maxLength="4"
										placeholder="CVC"
										className="border p-2 w-full"
									/>
								</div>
							</div>

							<p className="text-right">
								<button
									type="submit"
									className="bg-orange font-bold mr-3 p-2 text-white"
								>
									Submit
								</button>
							</p>

							{success && (
								<p className="text-green-500">Payment has been successfully</p>
							)}
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default UserForm;
