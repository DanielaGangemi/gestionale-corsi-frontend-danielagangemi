import cardStyle from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext } from "react";

export function Card(props) {

    const { user } = useContext(AuthContext);
    let rolesList = [];

    // console.log(user)

    if (user.roles != undefined) {

        rolesList = user.roles.split(",")

    }

    return (

        <>

            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                        <img src={'/course.png'} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><h2 className="card-title">{props.NomeCorso}</h2></h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Durata: {props.Durata} ore</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{props.DescrizioneBreve}</h6>
                            {/* <p className="card-text">{props.DescrizioneCompleta}</p> */}

                            {!rolesList.includes("Admin") ? <></> :
                                <div className={`${cardStyle.alignButton}`}>
                                    <button className={`btn btn-primary `}>
                                        <NavLink className="nav-link" to={`./course/${props.IdCorso}`} >
                                            {/* Visualizza dettagli */}
                                            <i className="bi bi-eye"></i>
                                        </NavLink>
                                    </button>
                                    <button className={`btn btn-danger`} style={{marginLeft: "1rem"}}>
                                        <NavLink className="nav-link" to={`./delete/${props.IdCorso}`} >
                                            <i className="bi bi-trash"></i>
                                        </NavLink>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className={`card ${cardStyle.cardStyle} mb-3`} style={{ maxWidth: "200rem" }}>
                <div className="row g-0">
                    <div class="col-md-4">
                    <div className={`${cardStyle.cardTitle}`}>
                            <h2 className="card-title">{props.NomeCorso}</h2>
                        </div>
                        
                    </div>
                    <div class="col-md-8">
                        
                        <div className="card-body">

                            <h6 className="card-subtitle mb-2 text-body-secondary">Durata: {props.Durata} ore</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{props.DescrizioneBreve}</h6>
                            <p className="card-text">{props.DescrizioneCompleta}</p>


                        </div>
                        {!rolesList.includes("Admin") ? <></> :
                            <div className={`card-footer ${cardStyle.alignButton}`}>
                                <button className={`btn ${cardStyle.backgroundButton}`} value="Visualizza">
                                    <NavLink className="nav-link" to={`./course/${props.IdCorso}`} >
                                        Visualizza dettagli
                                    </NavLink>
                                </button>
                                <button className={`btn ${cardStyle.backgroundButtonDelete}`} value="Visualizza">
                                    <NavLink className="nav-link" to={`./delete/${props.IdCorso}`} >
                                        <i className="bi bi-trash"></i>
                                    </NavLink>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div> */}

        </>

    );
}
