import React from "react";
import img from "../../public/logo.png"
import Navbar from "./navbar.jsx";

export function Header() {
    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container">
                <img src={img} alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                <a class="navbar-brand" href="#">
                    MyWebsite
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <Navbar />
                    <li className="nav-item"><a className="btn btn-primary me-2" href="#">Sign In</a></li>
                    <li className="nav-item"><a className="btn btn-primary" href="#">Sign Up</a></li>
                </div>
            </div>
        </nav>
    </>
}
