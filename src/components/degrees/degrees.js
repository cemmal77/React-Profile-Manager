import React, { useState } from "react";
import "./degrees.scss";
import Degree from "./degree/degree";
import DegreeForm from "./degree-form/degree-form";

const Degrees = (props) => {
  //State
  const [degreeList, setDegreeList] = useState([
    {
      id: 0,
      degreeLevel: "BS",
      institution: "University of Alabama",
      major: "Business Administration",
      minor: "Mathematics",
      dateReceived: new Date(Date.parse("05/07/1997")),
    },
    {
      id: 1,
      degreeLevel: "MS",
      institution: "Baylor University",
      major: "Management",
      minor: "",
      dateReceived: new Date(Date.parse("11/29/2002")),
    },
  ]);
  const [degreeForm, setDegreeForm] = useState(degreeFormInitialState);
  const [degreeFormMode, setDegreeFormMode] = useState(null);
  const [showDegreeForm, setShowDegreeForm] = useState(false);

  //Functions
  const handleDeleteClick = (id) => {
    setDegreeList((state) => [...degreeList.filter((item) => item.id !== id)]);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempState = { ...degreeForm };
    tempState[name] = value;

    setDegreeForm(tempState);
  };

  const handleAddDegreeSubmit = (event) => {
    event.preventDefault();

    const currentIds = degreeList.map((item) => item.id);
    const newId = currentIds.length > 0 ? Math.max(...currentIds) + 1 : 0;
    const newDegree = { ...degreeForm, id: newId };
    setDegreeList((state) => [...state, newDegree]);
    setDegreeForm(degreeFormInitialState);
    setDegreeFormMode(null);
    setShowDegreeForm(false);
  };

  const handleEditDegreeSubmit = (event) => {
    event.preventDefault();
    const degrees = degreeList.slice();
    const i = degrees.findIndex((item) => item.id === degreeForm.id);
    degrees[i] = degreeForm;
    setDegreeList(degrees);
    setDegreeForm(degreeFormInitialState);
    setDegreeFormMode(null);
    setShowDegreeForm(false);
  };

  const handleDegreeFormCancel = () => {
    setDegreeFormMode(null);
    setDegreeForm(degreeFormInitialState);
    setShowDegreeForm(false);
  };

  const handleAddDegreeClick = () => {
    setDegreeForm(degreeFormInitialState);
    setDegreeFormMode(formModeAdd);
    setShowDegreeForm(true);
  };

  const handleEditClick = (id) => {
    const model = degreeList.find((item) => item.id === id);
    setDegreeForm(degreeFormInitialState);
    setDegreeForm(model);
    setDegreeFormMode(formModeEdit);
    setShowDegreeForm(true);
  };

  //Elements
  const degreeCardElements = degreeList.map((item, i) => (
    <li key={"degree" + i} className="col-sm-auto">
      <Degree
        degreeLevel={item.degreeLevel}
        institution={item.institution}
        major={item.major}
        minor={item.minor}
        dateReceived={item.dateReceived}
        onEditClick={() => handleEditClick(item.id)}
        onDeleteClick={() => handleDeleteClick(item.id)}
      />
    </li>
  ));

  const renderDegreeFormElement = () => {
    switch (degreeFormMode) {
      case formModeAdd:
        return (
          <DegreeForm
            header="Add Degree"
            submitButtonText="Add Degree"
            model={degreeForm}
            handleInputChange={handleInputChange}
            onSubmit={handleAddDegreeSubmit}
            onCancel={handleDegreeFormCancel}
          />
        );

      case formModeEdit:
        return (
          <DegreeForm
            header="Edit Degree"
            submitButtonText="Save"
            model={degreeForm}
            handleInputChange={handleInputChange}
            onSubmit={handleEditDegreeSubmit}
            onCancel={handleDegreeFormCancel}
          />
        );

      default:
        return null;
    }
  };

  const addDegreeButtonElement = !showDegreeForm ? (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleAddDegreeClick}
    >
      <i className="fa fa-plus"></i> Add New Degree
    </button>
  ) : null;

  return (
    <div className="degrees">
      <h2>Degrees</h2>
      <ul className="row">{degreeCardElements}</ul>
      {renderDegreeFormElement()}
      {addDegreeButtonElement}
    </div>
  );
};

const degreeFormInitialState = {
  id: null,
  degreeLevel: "",
  institution: "",
  major: "",
  minor: "",
  dateReceived: null,
};

const formModeAdd = "add";
const formModeEdit = "edit";

export default Degrees;
