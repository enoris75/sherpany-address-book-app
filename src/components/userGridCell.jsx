import React from "react";
import "../styles/userGridCell.scss";

/**
 * Functional component which generates a cell-view for a single user
 * in the non-detailed view of users.
 * @param {*} props
 */
export const UserGridCell = (props) => {
  return (
    <div className="card user-grid-cell">
      <img
        className="card-img-top"
        src={props.picture.medium}
        alt={`Portrait of ${props.first}`}
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {props.first} {props.last}
        </li>
        <li className="list-group-item">{props.username}</li>
        <li className="list-group-item">{props.email}</li>
      </ul>
    </div>
  );
};
