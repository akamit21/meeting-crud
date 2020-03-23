import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "./Filter";
import Card from "./Card";
import PageLoader from "../common/PageLoader";
import { fetchAvailableRoom, bookRoom } from "../../redux/actions/roomAction";

class ListRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: ""
    };
  }

  componentDidMount = () => {
    if (localStorage && localStorage.getItem("date")) {
      let date = JSON.parse(localStorage.getItem("date"));
      let data = {
        startDate: date.startDate,
        endDate: date.endDate
      };
      this.setState(data);
      this.props.availableRoom(data);
    } else {
      this.props.history.push("/");
    }
  };

  getRoomId = id => {
    // alert(id);
    let data = {
      isBooked: true,
      bookedDate: [
        {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        }
      ]
    };
    this.props.bookRoom(data, id);
  };

  render() {
    const { isLoading, error, availableRooms } = this.props;
    if (isLoading) {
      return <PageLoader />;
    }
    if (availableRooms !== undefined)
      return (
        <div className="container my-5">
          <Filter />
          <div className="row">
            <Card roomInfo={availableRooms} roomId={this.getRoomId} />
          </div>
        </div>
      );
    return (
      <>
        {error && (
          <div className="container my-5">
            <div class="alert alert-danger" role="alert">
              <h6 className="h2 text-center">{error.response}</h6>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.roomReducer.isLoading,
    error: state.roomReducer.error,
    availableRooms: state.roomReducer.availableRooms
  };
};
const mapDispatchToProps = dispatch => {
  return {
    bookRoom: (data, id) => dispatch(bookRoom(data, id)),
    // deleteRoom: data => dispatch(deleteRoom(data)),
    availableRoom: data => dispatch(fetchAvailableRoom(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListRoom);
