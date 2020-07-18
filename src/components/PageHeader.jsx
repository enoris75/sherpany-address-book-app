import React, { Component } from "react";
import "../styles/PageHeader.scss";
import logo from "../resources/logo.png";
import { setFilter } from "../redux/";
import { connect } from "react-redux";

/**
 * Redux Mapping function.
 * @param {string} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
}

/**
 * Class managing the header of the application.
 */
class PageHeader extends Component {
  handleChange(event) {
    event.preventDefault();
    this.props.setFilter(event.target.value);
  }

  render() {
    return (
      <div id="page-header-container" className="navbar navbar-nav container">
        <div className="row">
          <div className="col-md-9">
            <img
              src={logo}
              height="100px"
              alt="React Code Challenge for Sherpany!"
            />
          </div>
          <div id="page-header-search-button" className="col-md-3">
            <input
              name="filter"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={(event) => this.handleChange(event)}
            />
            <label htmlFor="filter">Filter by fist and last name</label>
          </div>
        </div>
      </div>
    );
  }
}

export const Header = connect(null, mapDispatchToProps)(PageHeader);
