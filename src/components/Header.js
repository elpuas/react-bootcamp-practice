import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => (
	<header className="App-Header">
		<ul className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<li key="home" className="flex items-center flex-shrink-0 text-white mr-6">
				<Link className="font-semibold text-xl tracking-tight" to="/">My Site</Link>
			</li>
			{isAuthenticated ? (
				<>
				<li>
					<Link
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
						to="/new"
					>
						New Post
					</Link>
				</li>
				<li>
					<button
						className="linkLike inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
						onClick={e => {
							e.preventDefault();
							onLogout();
						}}
					>
						Logout
					</button>
				</li>
				</>
			) : (
				<li>
					<Link
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
						to="/login">
							Login
					</Link>
				</li>
			)}
		</ul>
	</header>
)

export default Header;