import React from "react";

/**
 * Functional component which generates a cell-view for a single user
 * in the non-detailed view of users.
 * @param {*} props
 */
export const UserGridCell = (props) => {
  return (
    <div className="card">
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
