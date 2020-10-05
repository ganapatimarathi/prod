import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog 1", description: "this is the description for blog 1" },
    { title: "blog 2", description: "this is the description for blog 1" },
    { title: "blog 2", description: "this is the description for blog 1" },
  ]);

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
