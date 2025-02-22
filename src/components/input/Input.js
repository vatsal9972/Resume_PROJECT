import React, { useState } from "react";
import "./Input.css";

const Input = ({ label, type, setResumeDetails, name }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    setResumeDetails((prev) => ({ ...prev, [name]: e.target.value }));
  };
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        type={type}
        placeholder={`Enter Your ${label}`}
        value={value}
        onChange={onChange}
        className="input-tag"
      />
    </div>
  );
};

export default Input;
