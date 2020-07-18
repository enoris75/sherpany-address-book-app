import React, { Component } from "react";
import { connect } from "react-redux";
import { UserGridCell } from "./userGridCell";
import { isBottomOfElementOnScreen } from "../shared/utils";
import { loadNextBatch } from "../services/userService";
import { NUMBER_OF_COLUMNS, CATALOG_SIZE } from "../shared/Constants";

/**
 * Function mapping (part of) the global state to props of this component
 * @param {redux state} state
 */
const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  };
};

/**
 * Component managint the grid of users.
 */
class usersGrid extends Component {
  /**
   * ID of the root element of the component. Used e.g. to track the scrolling
   */
  rootElementId = "userGrid";
  /**
   * Data structure containing the Users subdivided by row.
   */
  rowsOfUsers = {};

  componentDidMount() {
    document.addEventListener("scroll", this.detectScrollToTheBottom);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.detectScrollToTheBottom);
  }

  detectScrollToTheBottom = () => {
    const wrappedElement = document.getElementById(this.rootElementId);
    if (isBottomOfElementOnScreen(wrappedElement)) {
      console.log(`${this.rootElementId} bottom reached`);
      if (this.props.users.length < CATALOG_SIZE) {
        loadNextBatch();
      }
    }
  };

  /**
   * Split the users into rows whose length is according to the NUMBER_OF_COLUMNS value.
   */
  splitIntoRows() {
    this.rowsOfUsers = {};
    for (let index = 0; index < this.props.users.length; index++) {
      let row = Math.floor(index / NUMBER_OF_COLUMNS);
      if (!this.rowsOfUsers[row]) {
        this.rowsOfUsers[row] = [this.props.users[index]];
      } else {
        this.rowsOfUsers[row].push(this.props.users[index]);
      }
    }
  }

  render() {
    return (
      <div id="userGrid" className="container">
        {this.renderGrid()}
        {this.props.isLoading && <div>Loading additional users...</div>}
        {this.props.users.length >= CATALOG_SIZE && (
          <div>End of users catalog.</div>
        )}
      </div>
    );
  }

  renderGrid() {
    this.splitIntoRows();
    return Object.keys(this.rowsOfUsers).map((r, index) =>
      this.renderRow(this.rowsOfUsers[r], index)
    );
  }

  renderRow(users, rowKey) {
    return (
      <div className="row" key={rowKey}>
        {users.map((u, index) => (
          <div className="col-sm" key={index}>
            <UserGridCell
              picture={u.picture}
              title={u.name.title}
              first={u.name.first}
              last={u.name.last}
              username={u.login.username}
              email={u.email}
            />
          </div>
        ))}
      </div>
    );
  }
}

const Grid = connect(mapStateToProps)(usersGrid);

export default Grid;
