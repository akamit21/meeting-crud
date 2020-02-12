import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "./Filter";
import Card from "./Card";
import PageLoader from "./PageLoader";
import { fetchRoomList } from "../../redux/actions/roomAction";

class ListRoom extends Component {
  // constructor(props) {
  //   super (props)
  // }
  UNSAFE_componentWillMount = () => {
    this.props.roomList();
  };

  render() {
    const {
      isLoading,
      error,
      allRooms: { response }
    } = this.props;
    if (isLoading) {
      return <PageLoader />;
    }
    if (response !== undefined)
      return (
        <>
          <Filter />
          <div className="row">
            <Card roomInfo={response} />
          </div>
        </>
      );
    return (
      <>
        {error && (
          <div class="alert alert-danger" role="alert">
            <h6 className="h2 text-center">{error.response}</h6>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.fetchRoomReducer.isLoading,
    allRooms: state.fetchRoomReducer.rooms,
    error: state.fetchRoomReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // bookRoom: data => dispatch(bookRoom(data)),
    // deleteRoom: data => dispatch(deleteRoom(data)),
    roomList: () => dispatch(fetchRoomList())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListRoom);
