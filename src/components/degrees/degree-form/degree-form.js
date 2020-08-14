import React from "react";
import "./degree-form.scss";
import DatePicker from "react-datepicker";

const DegreeForm = (props) => {
  return (
    <div>
      <h3>{props.header}</h3>
      <form onSubmit={props.onSubmit} className="degree-form">
        <div className="form-group">
          <label htmlFor="degreeLevel">Degree Level</label>
          <select
            id="degreeLevel"
            name="degreeLevel"
            className="form-control"
            value={props.model.degreeLevel}
            onChange={props.handleInputChange}
          >
            <option>-- Select Degree Level --</option>
            <option value="BA">BA</option>
            <option value="BS">BS</option>
            <option value="MS">MS</option>
            <option value="MA">MA</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="institution">Institution</label>
          <input
            id="institution"
            name="institution"
            type="text"
            className="form-control"
            placeholder="Name of the institution attended"
            value={props.model.institution}
            onChange={props.handleInputChange}
          ></input>
        </div>

        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="major">Major</label>
            <input
              id="major"
              name="major"
              type="text"
              className="form-control"
              value={props.model.major}
              onChange={props.handleInputChange}
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="minor">Minor</label>
            <input
              id="minor"
              name="minor"
              type="text"
              className="form-control"
              value={props.model.minor}
              onChange={props.handleInputChange}
            ></input>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="dateReceived">Date Received</label>
            <div>
              <DatePicker
                selected={props.model.dateReceived}
                onChange={(date) => {
                  props.handleInputChange({
                    target: { name: "dateReceived", value: date },
                  });
                }}
                id="dateReceived"
                name="dateReceived"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-6"></div>
        </div>

        <div className="action-buttons">
          <button type="submit" className="btn btn-primary">
            {props.submitButtonText}
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DegreeForm;
