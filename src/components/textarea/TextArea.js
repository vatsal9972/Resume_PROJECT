import React, { useState } from "react";
import "./TextArea.css";

const TextArea = ({ label, name, setResumeDetails }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    setResumeDetails((prev) => ({ ...prev, [name]: e.target.value }));
  };
  return (
    <div className="textarea-wrapper">
      <label className="textarea-label">{label}</label>
      <textarea
        placeholder={`Enter Your ${label}`}
        value={value}
        onChange={onChange}
        className="textarea-tag"
      />
    </div>
  );
};

export default TextArea;
