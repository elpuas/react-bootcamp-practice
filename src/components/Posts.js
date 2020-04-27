import React from 'react';
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
	return (
		<article className="post container">
			<h1>Posts</h1>
			<ul>
				{ posts.length < 1 && (
					<li key="empty">No Posts Yet!</li>
				)}
				{posts.map(post => (
					<li key={post.id}>
						<Link to={`/post/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</article>
	 );
}

export default Posts;