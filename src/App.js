import React, { Component } from 'react';

import Header from './components/Header';
import Posts from './components/Posts';

import './tailwind.generated.css';

class App extends Component {
  // Load some posts into state.
  state = {
    posts: [
      {
        id: 1,
        title: "Hello React",
        content: "Lorem."
      },
      {
        id: 2,
        title: "Hello Project",
        content: "Tothe."
      },
      {
        id: 3,
        title: "Hello Blog",
        content: "Ipsum."
      }
    ]
  };

  render(){
    return(
      <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <Header />
        <Posts posts={ this.state.posts }/>
      </div>
    )
  }
}

export default App;
