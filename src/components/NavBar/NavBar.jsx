import React, { useState } from "react";

const NavBar = props => {
  const [search, setSearch] = useState("");
  function onChange(e) {
    let newValue = e.target.value;
    setSearch(newValue);
    console.log(newValue);
  }
  function handlesubmit(e) {}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>

        <form onSubmit={handlesubmit} className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={search}
            onChange={onChange}
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
