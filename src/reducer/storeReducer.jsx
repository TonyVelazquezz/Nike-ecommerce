import Types from '../types/Types';
// import productsObject from '../helpers/productsObject';

export const storeInitialState = {
	products: [],
	cart: [],
};

export const storeReducer = (state, action) => {
	switch (action.type) {
		case Types.ADD_PRODUCTS: {
			return {
				...state,
				products: action.payload,
			};
		}

		case Types.ADD_TO_CART: {
			const newItem = state.products.find(
				product => product.id === action.payload
			);

			//comprobar si el producto ya existe en el carrito de compras
			const existingCartItem = state.cart.find(item => item.id === newItem.id);

			return existingCartItem
				? {
						...state,
						cart: state.cart.map(item =>
							item.id === newItem.id && item.quantity < 10 && newItem.stock > 0
								? { ...item, quantity: item.quantity + 1 }
								: item
						),
				  }
				: { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
		}

		case Types.SUBTRACT_STOCK: {
			const newItem = state.products.find(
				product => product.id === action.payload
			);

			const currentCartItem = state.cart.find(item => item.id === action.payload);

			return {
				...state,
				products: state.products.map(product =>
					product.id === newItem.id &&
					newItem.stock > 0 &&
					currentCartItem.quantity < 10
						? { ...product, stock: product.stock - 1 }
						: product
				),
			};
		}

		case Types.ADD_STOCK: {
			const newItem = state.products.find(
				product => product.id === action.payload
			);

			const currentCartItem = state.cart.find(item => item.id === action.payload);

			return {
				...state,
				products: state.products.map(product =>
					product.id === newItem.id && newItem.stock < currentCartItem.stock - 1
						? { ...product, stock: product.stock + 1 }
						: product
				),
			};
		}

		case Types.INCREASE_QUANTITY: {
			const newItem = state.products.find(
				product => product.id === action.payload
			);
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload && newItem.stock > 0
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};
		}

		case Types.DECREASE_QUANTITY: {
			const newItem = state.products.find(
				product => product.id === action.payload
			);

			const currentCartItem = state.cart.find(item => item.id === action.payload);
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload && newItem.stock < currentCartItem.stock - 1
						? { ...item, quantity: item.quantity - 1 }
						: item
				),
			};
		}

		case Types.REMOVE_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			};
		}

		case Types.RESTORE_STOCK: {
			const newItem = state.products.find(
				product => product.id === action.payload
			);

			const currentCartItem = state.cart.find(item => item.id === action.payload);

			return {
				...state,
				products: state.products.map(product =>
					product.id === newItem.id
						? { ...product, stock: currentCartItem.stock }
						: product
				),
			};
		}

		default:
			return state;
	}
};
