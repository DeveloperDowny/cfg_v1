import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes>
    </>
  );
}

export default App;
