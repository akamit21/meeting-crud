import React, { Component } from "react";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { userSignUp } from "../../redux/actions/authAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: ""
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      mobile: this.state.mobile,
      description: "null"
    };
    this.props.onUserSignUp(userData);
  };

  componentDidUpdate = prevProps => {
    if (this.props.registerResponse !== prevProps.registerResponse) {
      const { registerResponse } = this.props;
      Swal.fire({
        title: "Done!",
        text: registerResponse.data.message,
        icon: registerResponse.data.error ? "warning" : "success",
        timer: 2000,
        button: false
      }).then(() => {
        this.props.history.push("/login");
      });
    }
  };

  render() {
    const page = this.props.isLoading ? (
      <div
        className="d-flex justify-content-center "
        style={{ height: "100vh", margin: "0 auto" }}
      >
        <Loader
          type="Audio"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    ) : (
      <div className="jumbotron">
        <h1>User Registration</h1>
        <hr />
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-outline-dark btn-lg">
            Submit
          </button>
        </form>
      </div>
    );
    return <>{page}</>;
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.authReducer.isLoading,
    registerResponse: state.authReducer.registrationResponse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUserSignUp: data => dispatch(userSignUp(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
