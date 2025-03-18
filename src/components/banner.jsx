import React from "react"
import backgroundImage from "../../public/background.webp"
export function Banner() {
    return <>
            <section className="banner d-flex align-items-center justify-content-center text-center text-white"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat",
                height: "100vh",
                position: "relative"
            }}>
                <div className="banner-content">
                    <h1 className="display-4 fw-bold">Welcome to My Website</h1>
                    <p className="lead">Explore our world of creativity, innovation, and excellence.</p>
                    <a href="#" className="btn btn-primary btn-lg">Get Started</a>
                </div>
            </section>
        </>
}