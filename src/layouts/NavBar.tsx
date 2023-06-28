import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5 py-4">
        <a className="navbar-brand" href="/">Ok Publication</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex mx-auto w-50">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button id="search-button" type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </form>
          <div className="d-flex">
            <Link to="/login">
                <span style={{color: 'black'}}>
                  <FontAwesomeIcon icon={faUser}/>
                </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
