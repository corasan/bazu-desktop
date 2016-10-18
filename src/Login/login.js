import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  login = () => {
    fb.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => console.log(user))
    .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div>
        <h1>Login!</h1>

        <div>
          <form>
            <input type="email" placeholder="Email" onChange={ (email) => this.setState({email})}/>
            <input type="password" placeholder="Password" onChange={ (password) => this.setState({password})}/>
          </form>
        </div>
      </div>
    );
  }
}
