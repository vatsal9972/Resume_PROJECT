import React, { useState } from "react";
import "./MultiEducation.css";

const defaultValue = {
  college_name: "",
  start_year: "",
  end_year: "",
  grade: "",
};

const MultiEducation = ({ name, setResumeDetails }) => {
  const [value, setValue] = useState(defaultValue);
  const [lists, setLists] = useState([]);

  const onChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onAdd = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(100000000 + Math.random() * 900000000),
      ...value,
    };
    setResumeDetails((prev) => ({ ...prev, [name]: [...lists, value] }));
    setLists([...lists, data]);
    setValue(defaultValue);
  };

  const onRemove = (e, id) => {
    e.preventDefault();
    const data = lists.filter((x) => x.id !== id);
    setResumeDetails((prev) => ({ ...prev, [name]: data }));
    setLists(data);
  };

  return (
    <div className="">
      <div className="multi-input-wrapper">
        <input
          className="input-tag"
          type="text"
          placeholder="Enter School/College Name"
          name="college_name"
          onChange={onChange}
          value={value.college_name}
        />
        <input
          className="input-tag"
          type="number"
          placeholder="Enter Start Year"
          name="start_year"
          onChange={onChange}
          value={value.start_year}
        />
        <input
          className="input-tag"
          type="number"
          placeholder="Enter End Year"
          name="end_year"
          onChange={onChange}
          value={value.end_year}
        />

        <input
          className="input-tag"
          type="text"
          placeholder="Enter Grade"
          name="grade"
          onChange={onChange}
          value={value.grade}
        />
        <button className="add-btn" onClick={onAdd}>
          Add+
        </button>
      </div>
      <div>
        {lists.map((list) => (
          <div key={list.id}>
            <h6 className="list-value">
              School/College Name: <span>{list.college_name}</span>
            </h6>
            <h6 className="list-value">
              Start Year: <span>{list.start_year}</span>
            </h6>
            <h6 className="list-value">
              End Year: <span>{list.end_year}</span>
            </h6>
            <h6 className="list-value">
              Grade: <span>{list.grade}</span>
            </h6>
            <button
              className="remove-btn"
              onClick={(e) => onRemove(e, list.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiEducation;
