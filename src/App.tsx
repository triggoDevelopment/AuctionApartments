import React from "react";
import { Routes, Route } from "react-router";
import PageNotFound from "./PageNotFound";
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
        <Route path="./PageNotFound" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
