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

        // console.log(event.target.value)

        const { name, value } = event.target;

        setLoginForm({ ...loginForm, [name]: value })

    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        console.table(loginForm)

        // gestire le regex
        // mi ritorna un oggetto se la regex è rispettata, altrimenti null
        let validatedEmail = validateEmail(loginForm.email)
        let validatedPassword = validatePassword(loginForm.password)

        console.log(validateEmail(loginForm.email))
        console.log(validatedEmail)

        // chiamata a be

        if (validatedEmail != null && validatedPassword != null) {

            const response = await login(loginForm)

            if (response == 0) {

                alert("Credenziali non valide")

            } else {

                navigateTo("/home")

            }

            //redirect to home


        } else {

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
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Invio</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}