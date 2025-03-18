import React from "react";
import img from "../../public/logo.png"
import Navbar from "./navbar.jsx";

export function Header() {
    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={img} alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                    MyWebsite
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <Navbar />
                </div>
            </div>
        </nav>
    </>
}
