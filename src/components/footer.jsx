import Navbar from "./navbar";

export function Footer() {
    return <>
        <footer className="bg-dark text-white text-center text-lg-start py-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                        <a className="navbar-brand text-white d-flex align-items-center" href="#">
                            <img src="/logo.png" width="40" height="40" className="me-2" alt="Logo" />
                            MyWebsite
                        </a>
                    </div>
                    <div className="col-md-4 text-center">
                        <Navbar />
                    </div>
                    <div className="col-md-4 text-center">
                        <p className="mb-2">Follow us:</p>
                        <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                        <p className="mt-3">&copy; 2025 MyWebsite. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}