import React from "react";
import "./App.scss";
import Profile from "./components/profile/profile";
import Content from "./components/content/content";

const App = () => (
  <div>
    <div className="App">
      <header>
        <h1>Hello, world!</h1>
      </header>

      <div className="row">
        <div className="col-lg-3">
          <Profile />
        </div>
        <div className="col-lg-9">
          <Content />
        </div>
      </div>
    </div>
  </div>
);

export default App;
