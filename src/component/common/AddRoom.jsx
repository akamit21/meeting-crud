import React, { Component } from "react";
import { connect } from "react-redux";
// import { addRoom } from "../../redux/actions/roomAction";

class AddRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floor: "",
      name: "",
      capacity: "",
      price: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      floor: this.state.floor,
      name: this.state.name,
      capacity: this.state.capacity,
      price: this.state.price,
      booked: false
    };
    this.props.addRoom(data);
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">ADD NEW ROOM</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="floor">Select Floor</label>
            <select
              className="form-control"
              name="floor"
              onChange={e => this.handleChange(e)}
            >
              <option value="" defaultValue>
                Select Floor
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Meeting Room Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Meeting Room Name"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Room Capacity</label>
            <input
              type="text"
              name="capacity"
              className="form-control"
              placeholder="Room Capacity"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price Per Day</label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Price Per Day"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-outline-dark float-right">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addRoom: data => dispatch(addRoom(data))
//   };
// };
export default connect(null, null)(AddRoom);
