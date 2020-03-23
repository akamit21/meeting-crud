import React, { Component } from "react";
import { connect } from "react-redux";
import { filterRoom, sortRoom } from "../../redux/actions/roomAction";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: "",
      sortType: ""
    };
  }

  handleFilter = e => {
    this.setState({
      filterType: e.target.value
    });
    this.props.filterRoom(e.target.value);
  };

  handleSort = e => {
    this.setState({
      sortType: e.target.value
    });
    this.props.sortRoom(e.target.value);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <select
              className="form-control"
              onChange={e => this.handleFilter(e)}
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
        </div>
        <div className="col-md-offset-3 col">
          <div className="btn-group float-right" role="group">
            <button
              type="button"
              className="btn btn-secondary"
              value="asc"
              onClick={e => this.handleSort(e)}
            >
              SORT BY PRICE [ASC]
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="dsc"
              onClick={e => this.handleSort(e)}
            >
              SORT BY PRICE [DSC]
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterRoom: data => dispatch(filterRoom(data)),
    sortRoom: data => dispatch(sortRoom(data))
  };
};

export default connect(null, mapDispatchToProps)(Filter);
