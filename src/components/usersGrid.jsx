import React, { Component } from "react";
import { connect } from "react-redux";
import { UserGridCell } from "./userGridCell";

/**
 * Function mapping (part of) the global state to props of this component
 * @param {redux state} state
 */
const mapStateToProps = (state) => {
  return { users: state.users };
};

/**
 * Nubmer of the columns in the grid
 */
const NUMBER_OF_COLUMNS = 5;

class usersGrid extends Component {
  rowsOfUsers = {};

  splitIntoRows() {
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
    if (!this.props.users.length) {
      return <div>Loading...</div>;
    } else {
      return <div className="container">{this.renderGrid()}</div>;
    }
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
          <div className="col-sm-1" key={index}>
            <UserGridCell
              picture={u.picture}
              title={u.name.title}
              first={u.name.first}
              last={u.name.last}
            />
          </div>
        ))}
      </div>
    );
  }
}

const Grid = connect(mapStateToProps)(usersGrid);

export default Grid;
