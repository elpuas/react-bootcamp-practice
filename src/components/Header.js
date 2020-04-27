import React from 'react';
import { Link } from "react-router-dom";

const Header = props => (
	<header className="App-Header">
		<ul className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<li key="home" className="flex items-center flex-shrink-0 text-white mr-6">
				<Link className="font-semibold text-xl tracking-tight" to="/">My Site</Link>
			</li>
		</ul>
	</header>
)

export default Header;