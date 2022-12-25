import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  let TextColour = 'text-black';
  if(props.mode==='dark'){
    TextColour='text-light';
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className={`navbar-brand ${TextColour}`} to="/">
            {props.title}
          </Link> */}
          <a className={`navbar-brand ${TextColour}`} href="#">
            {props.title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className={`nav-link active ${TextColour}`} aria-current="page" to="/">
                  {props.main}
                </Link> */}
                <a className={`nav-link active ${TextColour}`} aria-current="page" href="#">
                  {props.main}
                </a>

              </li>
              <li className="nav-item">
                {/* <Link className={`nav-link ${TextColour}`} to="/about">
                  {props.about}
                </Link> */}
                <a className={`nav-link ${TextColour}`} href="#">
                  {props.about}
                </a>

              </li>
            </ul>
          
            <div className="form-check form-switch">

              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label ${TextColour}`} htmlFor="flexSwitchCheckDefault"><strong>{props.mode==="light" ? "Go Dark" : "Go Light"}</strong></label>
            </div>

          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "ReactJs",
    main: "Home",
    about: "About",
}