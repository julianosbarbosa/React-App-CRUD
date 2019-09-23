import React from "react";
import "./app.css";
import logo from "./assets/CRUD.png";
import List from "./componets/List";

const App = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <List />
    </div>
  );
};

export default App;
