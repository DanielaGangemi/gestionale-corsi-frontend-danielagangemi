import { useContext } from "react";
import { NavLink } from "react-router-dom";
import navbarStyle from "./Navbar.module.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useState } from "react";
import { logout } from "../../services/RESTservice";
import { useNavigate } from "react-router-dom";
import { deleteCookies } from "../../services/CookieService";

export function Navbar() {

    const { user } = useContext(AuthContext);
    let rolesList = [];

    if (user.roles != undefined) {

        rolesList = user.roles.split(",")

    }

    const navigateTo = useNavigate();

    const handleLogout = async () => {

        const response = await logout();

        if (response == 1) {

            // cancellazione dei cookie
            deleteCookies()

            // ritorno alla login
            navigateTo("/")

        } else {

            alert("Problemi interni al server")

        }

    }


    return (
        <>
            <nav className={`navbar navbar-expand-lg ${navbarStyle.background}`} data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        Gestionale Corsi
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">

                            <NavLink className="nav-link" to="" >Home</NavLink>

                            {rolesList.includes("Admin") && !rolesList.includes("Docente") ? <NavLink className="nav-link" to="courses" >Corsi</NavLink> : <></>}

                            {rolesList.includes("Docente") && rolesList.includes("Admin") ?
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Corsi
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="courses">I miei corsi</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="courses">Visualizza tutti i corsi</NavLink></li>

                                    </ul>
                                </li> : ""}

                            {!rolesList.includes("Admin") && rolesList.includes("Docente") ? <NavLink className="nav-link" to="courses" >I miei corsi</NavLink> : <></>}

                        </div>

                        <div className="ms-auto">
                            <button className="btn btn-light" onClick={handleLogout}>Logout</button>
                        </div>



                    </div>
                </div>
            </nav>
        </>
    );
}