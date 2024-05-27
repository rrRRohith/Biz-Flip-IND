const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top d-none d-lg-block">
            <div className="container">
                <a className="navbar-brand py-1 top" href="/">
                    <img src="https://res.cloudinary.com/rr6/image/upload/v1716203422/unnamed_1_l0br9p.png" />
                </a>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link p-2" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2" href="/about-us">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2" href="/careers">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2" href="/auth">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;