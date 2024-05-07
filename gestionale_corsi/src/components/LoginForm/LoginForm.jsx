import loginFormStyle from "./LoginForm.module.css"
import { useState } from "react";
import { login } from "../../services/RESTservice";
import { validateEmail, validatePassword } from "../../services/ValidationService";
import { useNavigate } from "react-router-dom";

export function LoginForm() {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const navigateTo = useNavigate();

    const handleChange = (event) => {

        const { name, value } = event.target;

        setLoginForm({ ...loginForm, [name]: value })

    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        // console.table(loginForm) // DEBUG

        // --- CHECK INPUT USANDO LA REGEX ---
        // ritorna un oggetto se la regex è rispettata, altrimenti null
        let validatedEmail = validateEmail(loginForm.email)
        let validatedPassword = validatePassword(loginForm.password)

        // --- CHIAMATA ENDPOINT PER LA LOGIN ---
        if (validatedEmail != null && validatedPassword != null) {

            // se sono rispettate le condizioni dettate dalla regex allora chiama l'endpoint
            const response = await login(loginForm)

            // controllo credenziali
            if (response == 0) {

                alert("Credenziali non valide")

            } else {

                navigateTo("/home")

            }

        } else {

            // condizioni dettate dalla regex non rispettate
            alert("Email o password non rispettano i criteri")

        }

    }

    return (
        <>

            <div className="card" style={{ width: "25rem" }}>

                <div className="card-body">
                    <div className={`${loginFormStyle.title}`}>
                        <h2 className="card-title">Login</h2>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={loginForm.email} onChange={handleChange} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={loginForm.password} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Invio</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}