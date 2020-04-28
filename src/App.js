import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';
import PostForm from './components/PostForm';
import Message from './components/Message';

import './tailwind.generated.css';

class App extends Component {
  // Load some posts into state.
  state = {
    posts: [],
    message: null
  };

/**
 * Create slug from post title
 *
 * @param string title
 * @memberof App
 * @author Alfredo Navas <alfredo.navas@webdevstudios.com>
 */
getNewSlugFromTitle = title =>
    encodeURIComponent(
      title
        .toLowerCase()
        .split(" ")
        .join("-")
);

/**
 * Add New Post
 *
 * @param Object post.
 * @memberof App
 * @author Alfredo Navas <alfredo.navas@webdevstudios.com>
 */
addNewPost = post => {
    post.id = this.state.posts.length + 1;
    post.slug = this.getNewSlugFromTitle(post.title);
    this.setState({
      posts: [...this.state.posts, post],
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
};

/**
 * Update post.
 *
 * @param Object post.
 * @memberof App
 * @author Alfredo Navas <alfredo.navas@webdevstudios.com>
 */
updatePost = post => {
    post.slug = this.getNewSlugFromTitle(post.title);
    const index = this.state.posts.findIndex(p => p.id === post.id);
    const posts = this.state.posts
      .slice(0, index)
      .concat(this.state.posts.slice(index + 1));
    const newPosts = [...posts, post].sort((a, b) => a.id - b.id);
    this.setState({
      posts: newPosts,
      message: "updated"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
};

/**
 * Delete post.
 *
 * @param Object post.
 * @memberof App
 * @author Alfredo Navas <alfredo.navas@webdevstudios.com>
 */
deletePost = post => {
    if (window.confirm("Delete this post?")) {
      const posts = this.state.posts.filter(p => p.id !== post.id);
      this.setState({ posts, message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };

  render(){
    return(
      <Router>
        <div className="max-w-screen-lg mx-auto">
        <Header />
        {this.state.message && <Message type={this.state.message} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Posts posts={this.state.posts} deletePost={this.deletePost} />
            )}
            />
            <Route
            path="/post/:postSlug"
            render={props => {
              const post = this.state.posts.find(
                post => post.slug === props.match.params.postSlug
              );
                return <Post post={post} />;
              }
            }
            />
            <Route
              exact
              path="/new"
              render={() => (
                <PostForm
                  addNewPost={this.addNewPost}
                  post={{ id: 0, slug: "", title: "", content: "" }}
                />
              )}
            />
            <Route
              path="/edit/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post) {
                  return <PostForm updatePost={this.updatePost} post={post} />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
            component={NotFound} />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
