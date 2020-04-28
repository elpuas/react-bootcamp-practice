import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';
import PostForm from './components/PostForm';

import './tailwind.generated.css';

class App extends Component {
  // Load some posts into state.
  state = {
    posts: []
  };
  addNewPost = post => {
    post.id = this.state.posts.length + 1;
    post.slug = encodeURIComponent(
      post.title
        .toLowerCase()
        .split(" ")
        .join("-")
    );
    this.setState({
      posts: [...this.state.posts, post]
    });
  };

  render(){
    return(
      <Router>
        <div className="max-w-screen-lg mx-auto">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Posts posts={this.state.posts} /> }
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
            render={() => <PostForm addNewPost={this.addNewPost} />}
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
