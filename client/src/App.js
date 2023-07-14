import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestComponent from "./components/test";
import Test2 from "./components/Test2";
import Landing_page from "./components/Landing_page";
import Page from "./components/page";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test" element={<TestComponent />} />
        <Route path="/Landing_page" element={<Landing_page />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
