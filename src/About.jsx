import React from "react";
import Common from "./Common";
import homepage from "../src/images/about.jpg";

const About = () => {
  return(
  <>
  <Common  name="Welcome to about page" imgsrc={homepage} btname="Contact Now"/>
  </>
  );
}

export default About;