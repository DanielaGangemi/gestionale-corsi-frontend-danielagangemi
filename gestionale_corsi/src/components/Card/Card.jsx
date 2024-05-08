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


            <div className={`card ${cardStyle.cardStyle}`}>
                <div className={`card-header ${cardStyle.cardTitle}`}>
                    <h2 className="card-title">{props.NomeCorso}</h2>
                </div>
                <div className="card-body">

                    <h6 className="card-subtitle mb-2 text-body-secondary">Durata: {props.Durata} mesi</h6>
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
                    </div>
                }
            </div>

        </>

    );
}
