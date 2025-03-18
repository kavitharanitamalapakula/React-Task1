const Navbar = () => {
    return (
        <>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                <li class="nav-item"><a class="btn btn-primary me-2" href="#">Sign In</a></li>
                <li class="nav-item"><a class="btn btn-primary" href="#">Sign Up</a></li>
            </ul>
        </>
    )
}

export default Navbar