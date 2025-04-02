import './navbar.css';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" id='bigContainer' >
                <div className="container d-flex justify-content-between ms-3 me-3" id='container'>
                    <div className="d-flex align-items-center">
                        <Link className="navbar-brand" to={"/"}><img src="https://zerodha.com/static/images/logo.svg" alt="" srcset="" style={{width:"28%"}} /></Link>
                        <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            {/* <a className="nav-link active me-4 text-secondary" aria-current="page" href="#">Home</a> */}
                            <Link className="nav-link me-4 text-secondary" to={'/signup'}>Sigup</Link>
                            <Link className="nav-link me-4 text-secondary" to={'/about'}>About</Link>
                            <Link className="nav-link me-4 text-secondary" to={'/products'}>Products</Link>
                            <Link className="nav-link me-4 text-secondary" to={'/pricing'}>Pricing</Link>
                            <Link className="nav-link me-4 text-secondary" to={'/support'}>Support</Link>
                            <Link className="nav-link me-4 text-secondary d-none d-lg-block" to={''}><i className="fa-solid fa-bars"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}