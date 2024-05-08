import { NavLink } from "react-router-dom";
import homeStyle from "./Home.module.css"

export function Home() {
    return (
        <>
            <h1 className={homeStyle.title}>Benvenuto al Gestionale Corsi</h1>

            {/* <div className={homeStyle.title}>
                <button className={`btn ${homeStyle.backgroundButton}`}>
                    <NavLink className="nav-link" to="/home/courses" >
                        Visualizza i corsi
                    </NavLink>
                </button>
            </div> */}
        </>
    );
}