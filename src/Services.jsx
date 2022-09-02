import React from "react";
import Card from "./Card";
import SData from "./SData";

const Services = () => {
  return (
    <>
    <section>
    <div className="my-5">
      <h1 className="text-center" > Our Services</h1>
    </div>
        <div className="container">
            <div className="row">
                <div className="col-12 mx-auto">
                <div className="row gy-4">
                  {
                    SData.map( (val, index) => {
                      return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                    } )
                  }
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Services;