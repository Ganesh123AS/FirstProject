import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-12 mx-auto">

              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> {props.name} Grow Your Business with <strong className="brand-name">Sameer Bhatt</strong></h1>
                <h2 className="my-3"> A Short Demo Of React.Trying to make a small project! </h2>
                <div className="mt-3">
                  <NavLink to="/services" className="btn-get-started" > {props.btname} </NavLink>
                </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animate" alt="home img" />                  
                </div>
                </div>

                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Common;