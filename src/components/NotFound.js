import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
	<article className="max-w-screen-lg rounded overflow-hidden shadow-lg">
		<div className="px-6 py-4">
			<h1 className="font-bold text-xl mb-2">404!</h1>
			<p className="text-gray-700 text-base">
				Content not found.
				<Link to="/">Return to posts</Link>
			</p>
		</div>
	</article>
);
export default NotFound;