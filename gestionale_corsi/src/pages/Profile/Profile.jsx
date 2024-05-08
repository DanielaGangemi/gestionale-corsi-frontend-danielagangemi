import { useEffect, useState } from "react";
import { getClaimCookie } from "../../services/CookieService";
import profileStyle from "./Profile.module.css";

export function Profile() {

    const [user, setUser] = useState({});

    useEffect(() => {

        setUser(getClaimCookie())

    }, [])

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ borderRadius: ".5rem;" }}>
                                <div className="row g-0">
                                    <div className={`col-md-4 ${profileStyle.gradientCustom}text-center text-white`}
                                        style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                        <img src={'/profile.png'}
                                            alt="Avatar" className="img-fluid my-5"/>

                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Anagrafica</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Nome</h6>
                                                    <p className="text-muted">{user.name}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Cognome</h6>
                                                    <p className="text-muted">{user.surname}</p>
                                                </div>
                                            </div>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">{user.email}</p>
                                                </div>

                                            </div>
                                            <h6>Ruoli</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">

                                                    <p className="text-muted">{user.roles}</p>
                                                </div>

                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}