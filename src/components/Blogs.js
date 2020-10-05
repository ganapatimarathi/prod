import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "./Form";

const Blogs = () => {
  const [blog, addBlog] = useState({ title: "", description: "" });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (field) => (event) => {
    addBlog({ ...blog, [field]: event.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      label1="title"
      label2="description"
      handleChange={handleChange}
      HandleSubmit={HandleSubmit}
      btnName="Add"
      id={true}
    />
  );
};

export default Blogs;
