import React from 'react'
import { Link } from "react-router-dom";
import './Style.css';

const NavBar = () => {
  return (
    <div className="navbar">
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid leftSide">
        {/* <img src={Logo} /> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link to="/"> Home </Link>
         <Link to="/teacher"> Teacher </Link>
         <Link to="/student"> Student </Link>
        {/*
        <Link to="/contact"> Contact </Link>
        <Link to="/conDe"> ContactDetails </Link> */}
        </div>
</div>
</nav>


</div>
  )
}

export default NavBar
