import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound'

import './tailwind.generated.css';

class App extends Component {
  // Load some posts into state.
  state = {
    posts: [
      {
        id: 1,
        title: "Hello React",
        slug:"hello-react",
        content: "Lorem."
      },
      {
        id: 2,
        title: "Hello Project",
        slug:"hello-project",
        content: "Tothe."
      },
      {
        id: 3,
        title: "Hello Blog",
        slug:"hello-blog",
        content: "Ipsum."
      }
    ]
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
            <Route path="/post/:postSlug" render={props => {
              const post = this.state.posts.find(
                post => post.slug === props.match.params.postSlug
              );
                return <Post post={post} />;
              }
            }
            />
            <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
