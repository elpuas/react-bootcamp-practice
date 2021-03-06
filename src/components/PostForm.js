import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";
import 'react-quill/dist/quill.snow.css';


class PostForm extends Component {
	state = {
		post: {
		  id: this.props.post.key,
		  slug: this.props.post.slug,
		  title: this.props.post.title,
		  content: this.props.post.content
		},
		saved: false
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.post.key !== this.props.post.key) {
		  this.setState({
			post: {
			  key: this.props.post.key,
			  slug: this.props.post.slug,
			  title: this.props.post.title,
			  content: this.props.post.content
			}
		  });
		}
	}

	handlePostForm = e => {
		e.preventDefault();
		if (this.state.post.title) {
		  if (this.props.updatePost) {
			this.props.updatePost(this.state.post);
		  } else {
			this.props.addNewPost(this.state.post);
		  }
		  this.setState({ saved: true });
		} else {
		  alert("Title required");
		}
	  };

	render () {
		if (this.state.saved === true) {
			return <Redirect to="/" />;
		}
		return (
			<div className="max-w-screen-lg max-w-xs">
				<form
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={this.handlePostForm}
				>
					<h1 className="text-5xl text-center font-bold mb-8">Add a New Post</h1>
					<div className="mb-4">
						<label
						htmlFor="form-title"
						className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
						<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						defaultValue={this.props.title}
						id="form-title"
						value={this.state.title}
						onChange={e =>
							this.setState({
							  post: {
								...this.state.post,
								title: e.target.value
							  }
							})
						  }
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="form-title"
							className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
							<Quill
							defaultValue={this.state.post.content}
							onChange={(content, delta, source, editor) => {
								this.setState({
								post: {
									...this.state.post,
									content: editor.getContents()
								}
								});
							}}
							/>
					</div>
					<div className="flex items-center justify-between">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
					</div>
			</form>
			</div>
		)
	}
}

export default PostForm;