import React from "react";

const Select = ({ placeholder, setResumeDetails, name, options = [] }) => {
  const onChangeLanguages = () => {};
  return (
    <div>
      <select onChange={onChangeLanguages}>
        <option value="">Please select {placeholder}</option>
        {options.map((option = {}) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
