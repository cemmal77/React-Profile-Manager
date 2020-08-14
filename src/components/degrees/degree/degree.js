import React from "react";
import "./degree.scss";

const Degree = (props) => {
  const dateReceivedElement = props.dateReceived
    ? new Date(Date.parse(props.dateReceived)).toLocaleDateString()
    : null;

  return (
    <div className="card degree">
      <div className="card-body">
        <h5 className="card-title">
          {props.degreeLevel} {props.major}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.institution}</h6>
        <p className="card-text">{props.minor}</p>
        <p className="card-text">{dateReceivedElement}</p>

        <button
          type="button"
          className="btn btn-link card-link txt-pri"
          onClick={props.onEditClick}
        >
          <i className="fa fa-pencil"></i> Edit
        </button>

        <button
          type="button"
          className="btn btn-link card-link txt-dng"
          onClick={props.onDeleteClick}
        >
          <i className="fa fa-trash-o"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default Degree;
