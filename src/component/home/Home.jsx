import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Home.module.css";
import {
  fetchRoomList,
  fetchAvailableRoom
} from "../../redux/actions/roomAction";

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

  handleSubmit = e => {
    e.preventDefault();
    let userData = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.availableRoom(userData);
  };

  render() {
    return (
      <div className={`${styles.homeBG}`}>
        <div className={`${styles.homeBox}`}>
          <h1 className="display-3">Search Your Meeting Room!</h1>
          <hr className="my-4" />
          <form className="" onSubmit={e => this.handleSubmit(e)}>
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
                <button type="submit" className="btn btn-dark btn-block btn-lg">
                  Check ...
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    allRooms: () => dispatch(fetchRoomList()),
    availableRoom: data => dispatch(fetchAvailableRoom(data))
  };
};
export default connect(null, mapDispatchToProps)(Home);
