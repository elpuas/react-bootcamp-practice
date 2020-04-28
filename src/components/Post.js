import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Post = ({ post }) => {
	const converter = new QuillDeltaToHtmlConverter(post.content.ops, {});
	const contentHTML = converter.convert();

	return (
		<article className="max-w-screen-lg rounded overflow-hidden shadow-lg">
			<div
			className="px-6 py-4"
			>
				<h1
				className="font-bold text-xl mb-2">
				{post.title}
				</h1>
				<div
				className="text-gray-700 text-base content"
				dangerouslySetInnerHTML={{ __html: contentHTML }} />
			</div>
		</article>
	)
};

export default Post;