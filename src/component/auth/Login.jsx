import React from "react";
// import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/authAction";

const Login = ({ userLogin }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Login Page!</h1>
      <button
        type="button"
        className="btn btn-outline-dark btn-lg"
        onClick={userLogin}
      >
        Login
      </button>
    </div>
  );
};

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
