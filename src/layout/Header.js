import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex flex-row-reverse container-fluid bg-dark p-2 ">
      <Link className="ml-3">
        {" "}
        <button className="btn btn-outline-success">Blog</button>{" "}
      </Link>
      <Link to="/" className="ml-3">
        {" "}
        <button className="btn btn-outline-success">Home</button>{" "}
      </Link>
    </div>
  );
};

export default Header;
