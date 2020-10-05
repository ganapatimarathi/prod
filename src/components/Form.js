import React from "react";

const Form = ({ label1, label2, handleChange, HandleSubmit, btnName, id }) => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>{label1}</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange(label1)}
          ></input>
        </div>
        <div className="form-group">
          <label>{label2}</label>
          {id ? (
            <textarea
              className="form-control"
              type="text"
              row="3"
              onChange={handleChange(label2)}
            ></textarea>
          ) : (
            <input
              className="form-control"
              type="password"
              onChange={handleChange(label2)}
            ></input>
          )}
        </div>
        <button className="btn btn-success btn-block" onClick={HandleSubmit}>
          {btnName}
        </button>
      </form>
    </div>
  );
};

export default Form;
