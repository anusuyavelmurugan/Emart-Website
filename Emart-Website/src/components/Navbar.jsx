import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state =useSelector((state)=>state.handleCart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">LA COLLECTION</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <Link to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i> Login
          </Link>
          <Link to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i> Register
          </Link>
          <Link to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
