import { useContext } from "react";
import { NavLink } from "react-router-dom";
import navbarStyle from "./Navbar.module.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useState } from "react";
import { logout } from "../../services/RESTservice";
import { useNavigate } from "react-router-dom";
import { deleteCookies } from "../../services/CookieService";
import { Link } from "react-router-dom";

export function Navbar() {

    const { user } = useContext(AuthContext);
    let rolesList = [];

    // console.log(user)

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
                    <Link className="navbar-brand" to="" >
                        Gestionale Corsi
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">


                        {rolesList.includes("Docente") && rolesList.includes("Admin") ?
                            <div className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Utenti
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="profile">Profilo</Link></li>
                                        <li><Link className="dropdown-item" to="users">Visualizza tutti gli utenti</Link></li>

                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Corsi
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="courses/1">I miei corsi</Link></li>
                                        <li><Link className="dropdown-item" to="courses/2">Visualizza tutti i corsi</Link></li>

                                    </ul>
                                </li>
                            </div> : ""}

                        {!rolesList.includes("Admin") && rolesList.includes("Docente") ?
                            <div className="navbar-nav">
                                <Link className="nav-link" to="courses" >Profilo</Link>
                                <Link className="nav-link" to="courses" >Corsi</Link>
                            </div>
                            : <></>}

                        { }

                        <div className="ms-auto">
                            <button className="btn btn-light" onClick={handleLogout}>Logout</button>
                        </div>



                    </div>
                </div>
            </nav>
        </>
    );
}