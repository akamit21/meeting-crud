import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return props.roomInfo.map((room, index) => (
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
              className={`btn ${room.booked ? "btn-warning" : "btn-success"}`}
              onClick={() => props.roomId(room.id)}
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
  ));
};

export default Card;
