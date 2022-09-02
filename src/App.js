import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Search from "./Search";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>

    <Route exact path="/" element={<Home />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/services" element={<Services />} />
    <Route exact path="/Search" element={<Search />} />
    <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;