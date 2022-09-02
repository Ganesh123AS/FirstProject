import React from "react";
import { NavLink } from "react-router-dom";
import homepage from "../src/images/homepage.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common name="Welcome to Home page" imgsrc={homepage} btname="Get Started" />
    </>
  );
}

export default Home;