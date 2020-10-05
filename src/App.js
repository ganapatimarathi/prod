import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Header from "./layout/Header";

// context
import { BlogContext } from "./context/blog/blogContext";
import blogReducer from "./context/blog/blogReducer";
import { UserContext } from "./context/user/userContext";
import userReducer from "./context/user/userReducer";

const App = () => {
  const [blogs, dispatch] = useReducer(blogReducer, [
    { title: "blog 1", description: "this is the description for blog 1" },
    { title: "blog 2", description: "this is the description for blog 1" },
    { title: "blog 2", description: "this is the description for blog 1" },
  ]);

  const [isSignedin, SetIsSigniedIn] = useReducer(userReducer, false);

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      <UserContext.Provider value={{ isSignedin, SetIsSigniedIn }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blogs} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </BlogContext.Provider>
  );
};

export default App;
