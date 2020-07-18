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
        src={props.picture.thumbnail}
        alt={`Portrait of ${props.first}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.title} {props.first} {props.last}
        </h5>
      </div>
    </div>
  );
};
