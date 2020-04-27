import React from "react";

const Post = ({ post }) => (
	<article className="max-w-sm rounded overflow-hidden shadow-lg">
		<div className="px-6 py-4">
			<h1 className="font-bold text-xl mb-2">{post.title}</h1>
			<div className="text-gray-700 text-base">{post.content}</div>
		</div>
	</article>
);
export default Post;