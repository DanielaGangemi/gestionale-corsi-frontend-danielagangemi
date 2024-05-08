import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../services/RESTservice";
import { useState } from "react";
import deleteUserStyle from "./DeleteUser.module.css"

export function DeleteUser() {

    const { email } = useParams();
    const navigateTo = useNavigate();
    const [errorFlag, setErrorFlag] = useState(false)

    console.log(email);

    const handleReject = () => {

        navigateTo("/home/users")

    }

    const handleAccetp = async (event) => {

        event.preventDefault();

        try {

            const response = await deleteUser(email);

            if (response == 1) {

                setErrorFlag(true)

            } else {

                navigateTo("/home/users")

            }


        } catch (error) {

            console.error("Error delete user:", error);

        }

    }

    return (
        <>



            <div className="row" style={{ marginTop: "10rem" }}>
                <div className="col-md-7 mx-auto">

                    <div className="card">
                        <div className="card-header">
                            <h1>Cancellazione utente</h1>
                        </div>
                        <div className="card-body">

                            <p>Vuoi cancellare l'account {email} ?</p>

                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-danger" style={{ marginRight: "1rem" }} onClick={handleReject}>No</button>
                            <button type="button" className="btn btn-primary" onClick={handleAccetp}>Si</button>
                        </div>
                    </div>

                    {errorFlag == true ? <div className={deleteUserStyle.errorMessage}><p>Errore durante la cancellazione dell'utente</p></div> : ""}
                </div>
            </div>
        </>
    );
}