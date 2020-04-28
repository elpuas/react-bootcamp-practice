import React from 'react';
import { Link } from "react-router-dom";

const Posts = ({ posts, deletePost }) => {
	return (
		<article className="post container">
			<h1>Posts</h1>
			<ul>
				{ posts.length < 1 && (
					<li key="empty">No Posts Yet!</li>
				)}
				{posts.map(post => (
					<li key={post.id}>
						<h2>
						<Link to={`/post/${post.slug}`}>{post.title}</Link>
						</h2>
						<p>
						<Link
						to={`/edit/${post.slug}`}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit
						</Link>
						<button className="linkLike bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => deletePost(post)}>
						Delete
						</button>
						</p>
					</li>
				))}
			</ul>
		</article>
	 );
}

export default Posts;