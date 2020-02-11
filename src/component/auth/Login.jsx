import React, { Component } from "react";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/authAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password
    };
  };
  render() {
    return (
      <div className="jumbotron">
        <h1>User Login</h1>
        <hr />
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-outline-dark btn-lg">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLogin: () => dispatch(userLogin())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
