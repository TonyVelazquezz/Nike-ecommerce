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
				product => product.uid === action.payload
			);

			//comprobar si el producto ya existe en el carrito de compras
			const existingCartItem = state.cart.find(item => item.uid === newItem.uid);

			return existingCartItem
				? {
						...state,
						cart: state.cart.map(item =>
							item.uid === newItem.uid && item.quantity < 10 && newItem.stock > 0
								? { ...item, quantity: item.quantity + 1 }
								: item
						),
				  }
				: { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
		}

		case Types.SUBTRACT_STOCK: {
			const newItem = state.products.find(
				product => product.uid === action.payload
			);

			return {
				...state,
				products: state.products.map(product =>
					product.uid === newItem.uid && newItem.stock > 0
						? { ...product, stock: product.stock - 1 }
						: product
				),
			};
		}

		case Types.ADD_STOCK: {
			const newItem = state.products.find(
				product => product.uid === action.payload
			);

			const currentCartItem = state.cart.find(item => item.uid === action.payload);

			return {
				...state,
				products: state.products.map(product =>
					product.uid === newItem.uid && newItem.stock < currentCartItem.stock - 1
						? { ...product, stock: product.stock + 1 }
						: product
				),
			};
		}

		case Types.INCREASE_QUANTITY: {
			const newItem = state.products.find(
				product => product.uid === action.payload
			);
			return {
				...state,
				cart: state.cart.map(item =>
					item.uid === action.payload && newItem.stock > 0
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};
		}

		case Types.DECREASE_QUANTITY: {
			const newItem = state.products.find(
				product => product.uid === action.payload
			);

			const currentCartItem = state.cart.find(item => item.uid === action.payload);
			return {
				...state,
				cart: state.cart.map(item =>
					item.uid === action.payload && newItem.stock < currentCartItem.stock - 1
						? { ...item, quantity: item.quantity - 1 }
						: item
				),
			};
		}

		case Types.REMOVE_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter(item => item.uid !== action.payload),
			};
		}

		case Types.RESTORE_STOCK: {
			const newItem = state.products.find(
				product => product.uid === action.payload
			);

			const currentCartItem = state.cart.find(item => item.uid === action.payload);

			return {
				...state,
				products: state.products.map(product =>
					product.uid === newItem.uid
						? { ...product, stock: currentCartItem.stock }
						: product
				),
			};
		}

		default:
			return state;
	}
};
