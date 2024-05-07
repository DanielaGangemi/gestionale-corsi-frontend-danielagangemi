import registrationFormStyle from "./RegistrationForm.module.css"
import { useState } from "react"
import { validateNameOrSurname, validateEmail, validatePassword } from "../../services/ValidationService"
import { registration } from "../../services/RESTservice"
import { useNavigate } from "react-router-dom"

export function RegistrationForm() {

    const [registrationForm, setRegistrationForm] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        roleId: 1
    })

    const [flag, setFlag] = useState(false)

    const navigateTo = useNavigate();

    const handleChange = (event) => {

        const { name, value } = event.target;

        setRegistrationForm({ ...registrationForm, [name]: value })

    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        // console.table(registrationForm)

        // --- VALIDAZIONE DELL'INPUT ---
        let validatedName = validateNameOrSurname(registrationForm.name);
        let validatedSurname = validateNameOrSurname(registrationForm.surname)
        let validatedEmail = validateEmail(registrationForm.email)
        let validatedPassword = validatePassword(registrationForm.password)

        // --- CHIAMATA ENDPOINT PER LA REGISTRAZIONE ---
        if (validatedName != null && validatedSurname != null && validatedEmail != null && validatedPassword) {

            // fare chiamata be
            const response = await registration(registrationForm);

            // controllare se non è andata a buon fine
            if (response == 0) {

                // alert("Utente gia' registrato")
                setFlag(true);

            } else {

                navigateTo("/")

            }


        } else {

            // alert("Dati inseriti non validi")
            setFlag(true);

        }


    }

    return (
        <>
            <div className="card" style={{ width: "25rem", boxShadow: "0rem 1rem 10rem -4rem darkblue" }}>

                <div className="card-body">
                    <div className={`${registrationFormStyle.title}`}>
                        <h2 className="card-title">Regitrazione</h2>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="firstName" name="name" value={registrationForm.name} onChange={handleChange} />

                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Cognome</label>
                                <input type="text" className="form-control" id="lastName" name="surname" value={registrationForm.surname} onChange={handleChange} />

                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={registrationForm.email} onChange={handleChange} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={registrationForm.password} onChange={handleChange} />
                                <p style={{ marginTop: "0.5rem" }}>La password deve contenere:</p>
                                <ul>
                                    <li>6 caratteri minimo</li>
                                    <li>20 caratteri massimo</li>
                                    <li>1 carattere speciale</li>
                                    <li>1 lettera maiuscola</li>
                                    <li>1 numero</li>
                                </ul>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="roleLabel" className="form-label">Ruolo</label>
                                <select className="form-select" id="roleLabel" name="roleId" value={registrationForm.roleId} onChange={handleChange} >
                                    <option value="1">Admin</option>
                                    <option value="2">Docente</option>
                                </select>
                            </div>


                            <button type="submit" className="btn btn-primary">Registrati</button>
                            {flag == true ? <div className={registrationFormStyle.errorMessage}><p  >Credenziali non valide</p></div> : ""}

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}