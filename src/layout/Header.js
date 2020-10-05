import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user/userContext";

const Header = () => {
  const { isSignedin, SetIsSigniedI } = useContext(UserContext);

  return (
    <div className="d-flex flex-row-reverse container-fluid bg-dark p-2 ">
      <Link to={isSignedin ? "/blog" : "/signin"} className="ml-3">
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
