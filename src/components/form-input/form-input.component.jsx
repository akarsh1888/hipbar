import React from "react";
import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...allotherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...allotherProps} />
    {label ? (
      <label
        className={`${
          allotherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
