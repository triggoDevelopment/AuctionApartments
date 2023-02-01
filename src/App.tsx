import React from "react";

import { Routes, Route } from "react-router";
import PageNotFound from "./PageNotFound";
import Login from "./Components/HomeComponents/Login";
import { Home, MyListing } from "./Pages";
import "./customStyles.css";
import { Navbar } from "./Components/Navbar";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<MyListing />} />
        <Route path="*" element={<Login />} />
        <Route path="./PageNotFound" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
