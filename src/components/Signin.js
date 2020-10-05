import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import Form from "./Form";

const Signin = () => {

  const [userData, setUseradata] = useState({ email: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (field) => (event) => {
    setUseradata({ ...userData, [field]: event.target.value });
  };

  const HandleSubmit = (e) => {
    console.log(userData);
    e.preventDefault();
    if (userData.email === "tester@gmail.com" && userData.password === "abcd") {
      setRedirect(true);
    } else {
      //   alert("please check the fields");
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      label1="email"
      label2="password"
      handleChange={handleChange}
      HandleSubmit={HandleSubmit}
      btnName="Signin"
      id={false}
    />
  );
};

export default Signin;
