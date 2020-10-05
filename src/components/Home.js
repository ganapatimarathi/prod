import React, { useContext } from "react";
import { BlogContext } from "../context/blog/blogContext";

const Home = () => {
  const { blogs, dispatch } = useContext(BlogContext);

  return (
    <div className="container mt-5">
      {[...blogs].reverse().map((blog, index) => (
        <div className="card p-3 mt-3" key={index}>
          <div className="card-title text-center">{blog.title}</div>
          <div className="card-text">{blog.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
