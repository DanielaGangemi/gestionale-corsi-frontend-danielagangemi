import { NavLink } from "react-router-dom";
import navbarStyle from "./Navbar.module.css"

export function Navbar() {

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${navbarStyle.background}`} data-bs-theme ="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        Gestionale Corsi
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">

                            <NavLink className="nav-link" to="/" >Home</NavLink>

                            <NavLink className="nav-link" to="courses" >Courses</NavLink>
{/* 

                            <NavLink className="nav-link" >Pricing</NavLink> */}


                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}