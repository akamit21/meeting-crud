import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllRoom } from "../../redux/actions/roomAction";
import styles from "./Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: ""
    };
  }

  componentDidMount = () => {
    this.props.allRooms();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: new Date(e.target.value).getTime()
    });
  };

  handleClick = e => {
    e.preventDefault();
    localStorage.setItem(
      "date",
      JSON.stringify({
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
    );
    this.props.history.push("/list-room");
    // way to pass state value as an object
    // this.props.history.push({
    //   pathname: "/list-room",
    //   state: {
    //     startDate: "value"
    //   }
    // });
    // this.props.availableRoom(userData);
  };

  render() {
    return (
      <div className={`${styles.homeBG}`}>
        <div className={`${styles.homeBox}`}>
          <h1 className="display-3">Search Your Meeting Room!</h1>
          <hr className="my-4" />
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <input
                type="date"
                name="startDate"
                className="form-control form-control-lg"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="date"
                name="endDate"
                className="form-control form-control-lg"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="col-md-2 mb-3">
              <button
                type="button"
                className="btn btn-dark btn-block btn-lg"
                onClick={e => this.handleClick(e)}
              >
                Check ...
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    allRooms: () => dispatch(fetchAllRoom())
  };
};
export default connect(null, mapDispatchToProps)(Home);
