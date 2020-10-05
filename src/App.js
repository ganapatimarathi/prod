import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Header from "./layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blogs} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
