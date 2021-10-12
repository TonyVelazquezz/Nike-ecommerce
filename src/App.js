import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Header from './components/Header';

//Context
import { DataProvider } from './context/DataContext';

//pages
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
	return (
		<DataProvider>
			<Router>
				<>
					<Header />

					<Switch>
						<Route exact path="/" component={StorePage} />
						<Route exact path="/favorites" component={FavoritesPage} />
						<Route exact path="/cart" component={CartPage} />
						<Route exact path="/checkout" component={CheckoutPage} />

						<Redirect to="/" />
					</Switch>
				</>
			</Router>
		</DataProvider>
	);
};

export default App;
