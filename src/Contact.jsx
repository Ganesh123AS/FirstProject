import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState( {
    fullname : "",
    address : "",
    pnumber : "",
    email : "",
    password : "",

  });
    
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData( (preValue) =>{
      return {
        ...preValue,
      [name] : value
    }
    } )
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted`)
  }

  return (
    <>
      <section>
        <div className="my-5">
          <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="address"
                    value={data.address}
                    onChange={inputEvent}
                    placeholder="Enter Your Adress"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    required
                    name="pnumber"
                    value={data.pnumber}
                    onChange={inputEvent}
                    placeholder="Enter Your Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Adress</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Enter Your Email Adress"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    name="password"
                    value={data.password}
                    onChange={inputEvent}
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
