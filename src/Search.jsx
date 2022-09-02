import React from "react";

const Search = () => {
  return (
    <>
      <section>
      <h1 className="py-5 text-center" > Search Section </h1>
        <div className="container nav_bg py-5">
          <div className="row">
            <div className="col-10 max-auto">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
