import React, { Component } from 'react';

import Header from './components/Header';
import './App.css';

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
      <div className="App">
        <Header />
        <Post posts={ this.state.posts }/>
      </div>
    )
  }
}

export default App;
