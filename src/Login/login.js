import React, { Component } from 'react';
import { userLogin } from '../utils/user';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value});
  }

  handlePassword = (e) => {
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  login = () => {
    userLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Login!</h1>

        <div>
          <input type="email" placeholder="Email" onChange={this.handleEmail}/>
          <input type="password" placeholder="Password" onChange={this.handlePassword}/>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}
