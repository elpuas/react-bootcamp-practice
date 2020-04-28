import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.onLogin(this.state.email, this.state.password);
  };

  render() {
    return (
	  <form
	  className="container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
	  name="login"
	  onSubmit={this.handleLogin}
	  >
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
		  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
		  	className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
		  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!this.state.email && !this.state.password}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

