import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoBagOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { Nike } from '@icons-pack/react-simple-icons';
import { DataContext } from '../context/DataContext';

const Header = () => {
	const { state } = useContext(DataContext);
	const { cart } = state;

	return (
		<header>
			<nav className="flex items-center justify-between px-5 py-2">
				<Link className="logo" to="/">
					<Nike size={50} />
				</Link>
				{/* 
				<div className="flex gap-4 items-center justify-center flex-nowrap w-full">
					<Link className="text-lg " to="#">
						<p>New Releases</p>
					</Link>

					<Link className="text-lg " to="#">
						<p>Men</p>
					</Link>

					<Link className="text-lg " to="#">
						<p>Women</p>
					</Link>

					<Link className="text-lg " to="#">
						<p>Kids</p>
					</Link>

					<Link className="text-lg " to="#">
						<p>Sale</p>
					</Link>

					<Link className="text-lg " to="#">
						<p>Gifts</p>
					</Link>
				</div> */}

				<div className="flex items-center justify-end flex-nowrap gap-3">
					<Link className="text-sm" to="#">
						<p>Sign In</p>
					</Link>

					<Link className="heart p-1" to="/favorites">
						<AiOutlineHeart size={27} />
					</Link>

					<Link className="bag p-1" to="/cart">
						<div className="relative flex">
							<IoBagOutline size={27} className="" />
							{cart.length > 0 && (
								<div className="absolute left-2 top-1.5 text-sm">{cart.length}</div>
							)}
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
