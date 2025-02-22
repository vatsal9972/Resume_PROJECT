import React, { useState } from "react";
import "./MultiExperience.css";

const defaultValue = {
  company_name: "",
  start_year: "",
  end_year: "",
  description: "",
};

const MultiExperience = ({ name, setResumeDetails }) => {
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
      <div className="experience-input-container">
        <input
          type="text"
          placeholder="Enter Company Name"
          name="company_name"
          onChange={onChange}
          value={value.company_name}
          className="input-tag"
          style={{ width: "48%" }}
        />
        <input
          type="text"
          placeholder="Enter Start Year"
          name="start_year"
          onChange={onChange}
          value={value.start_year}
          className="input-tag"
          style={{ width: "48%" }}
        />
        <input
          type="text"
          placeholder="Enter End Year"
          name="end_year"
          onChange={onChange}
          value={value.end_year}
          className="input-tag"
          style={{ width: "48%" }}
        />

        <textarea
          placeholder="Enter Description"
          name="description"
          onChange={onChange}
          value={value.description}
          className="input-tag"
          style={{ width: "48%" }}
        />
        <button className="add-btn" onClick={onAdd}>
          Add+
        </button>
      </div>
      <div>
        {lists.map((list) => (
          <div key={list.id}>
            <h6 className="list-value">
              Company Name: <span>{list.company_name}</span>
            </h6>
            <h6 className="list-value">
              Start Year: <span>{list.start_year}</span>
            </h6>
            <h6 className="list-value">
              End Year: <span>{list.end_year}</span>
            </h6>
            <h6 className="list-value">
              Description: <span>{list.description}</span>
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

export default MultiExperience;
