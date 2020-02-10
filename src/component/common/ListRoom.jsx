import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { bookRoom, deleteRoom } from "../../redux/actions/roomAction";

class ListRoom extends Component {
  render() {
    const { allRooms } = this.props;
    console.log(allRooms);
    const totalLength = allRooms.length;
    const query = new URLSearchParams(this.props.location.search);
    const page = query.get("page");
    console.log(page);
    let tableData;
    if (page === null) {
      tableData = allRooms.slice(0, 5);
    } else {
      tableData = allRooms.slice(5 * Number(page), 5 * (Number(page) + 1));
    }
    console.log(tableData);
    const roomList = tableData.length ? (
      tableData.map((room, index) => (
        <div className="col-md-4 my-4" key={index}>
          <div className="card">
            <img
              src="https://placeimg.com/640/480/tech"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                {room.name} on <em>Floor {room.floor}</em>
              </h5>
              <p className="card-text">
                <span className="text-left">
                  <em>Capacity: </em>
                  {room.capacity}
                </span>
                <span className="float-right">
                  <em>Price: </em>
                  {room.price}
                </span>
              </p>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${
                    room.booked ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => this.props.bookRoom(index)}
                >
                  {room.booked ? "BOOKED" : "BOOK NOW"}
                </button>
                <Link to={`/view-room/${index}`} className="btn btn-info">
                  VIEW
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.deleteRoom(index)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <tr className="text-center">
        <td colSpan={5}>
          <strong>NO RESULT FOUND</strong>
        </td>
      </tr>
    );

    // pagination
    const { match } = this.props;
    let pages = Math.floor(totalLength / 5);
    let items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(
        <li key={i}>
          <Link to={`${match.url}?page=${i}`} className="page-link">
            {i}
          </Link>
        </li>
      );
    }

    const pagination = (
      <nav aria-label="Page navigation example">
        <ul className="pagination">{items}</ul>
      </nav>
    );

    return (
      <>
        <Filter />
        <div className="row">{roomList}</div>

        <div>{pagination}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    allRooms: state.roomReducer.selected
  };
};
const mapDispatchToProps = dispatch => {
  return {
    bookRoom: data => dispatch(bookRoom(data)),
    deleteRoom: data => dispatch(deleteRoom(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListRoom);
