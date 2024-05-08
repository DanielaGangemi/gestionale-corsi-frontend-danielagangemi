import { useState } from "react";
import { getClaimCookie } from "../../services/CookieService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserByEmail } from "../../services/RESTservice";
import { validateNameOrSurname } from "../../services/ValidationService";
import { updateUser } from "../../services/RESTservice";

export function UpdateUser() {

    const { email } = useParams();
    const [user, setUser] = useState({});

    let roles = [

        {
            id: 1,
            role: "Admin",
            isChecked: false
        },
        {
            id: 2,
            role: "Docente",
            isChecked: false
        }

    ]

    const [updateForm, setUpdateForm] = useState({

        name: "",
        surname: "",
        email: "",
        roleId: roles

    })

    useEffect(() => {

        async function findPersonalList() {

            try {

                let u = await getUserByEmail(email)

                setUser(u)

                u.roleList.forEach(role => {

                    roles.forEach(r => {

                        if (role.roleType == r.role) {

                            r.isChecked = true;
                        }
                    })
                })

                setUpdateForm({

                    name: u.name,
                    surname: u.surname,
                    email: u.email,
                    roleId: roles

                })


            }
            catch (error) {

                console.error("Error fetching users:", error);

            }
        }


        findPersonalList();




    }, [email])

    const handleRoleChange = (id, checkedEvent) => {

        const updatedRoles = updateForm.roleId.map(r =>
            r.id === id ? { ...r, isChecked: checkedEvent } : r
        );

        setUpdateForm(prevForm => ({
            ...prevForm,
            roleId: updatedRoles
        }));

    }


    const handleChange = (event) => {

        const { name, value } = event.target;

        setUpdateForm({ ...updateForm, [name]: value })

    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        let validatedName = validateNameOrSurname(updateForm.name);
        let validatedSurname = validateNameOrSurname(updateForm.surname)


        if (validatedName != null && validatedSurname != null) {

            try {

                let tempRoles = []

                updateForm.roleId.forEach(role => {

                    if (role.isChecked) {

                        tempRoles.push(role.id)

                    }

                })

                // per ogni ruolo faccio l'update
                tempRoles.forEach(async role => {

                    let newUser = {
                        name: updateForm.name,
                        surname: updateForm.surname,
                        email: updateForm.email,
                        roleId: role
                    }

                    const response = await updateUser(newUser);

                    // controllare se non è andata a buon fine
                    if (response == 0) {

                        alert("Impossibile modificare")
                        // setFlag(true);

                    } else {

                        alert("Operazione riuscita")

                    }

                })



            } catch (error) {

                console.error("Error update user:", error);

            }

        } else {

            alert("Dati inseriti non validi")

        }

    }



    return (
        <>



            <div className="row" style={{ marginTop: "10rem" }}>
                <div className="col-md-7 mx-auto">

                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="firstName" name="name" placeholder={updateForm.name} onChange={handleChange} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Cognome</label>
                                    <input type="text" className="form-control" id="lastName" name="surname" placeholder={updateForm.surname} onChange={handleChange} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={updateForm.email} readOnly />

                                </div>


                                <div className="mb-3">

                                    {roles.map((role, i) => (
                                        <>
                                            <div className="form-check" key={role.id}>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    placeholder={updateForm.roleId.id}
                                                    id={`role-${role.id}`}
                                                    checked={updateForm.roleId.some((r) => r.id === role.id && r.isChecked)}
                                                    onChange={(e) => handleRoleChange(role.id, e.target.checked)}
                                                />
                                                <label className="form-check-label" htmlFor={`role-${role.id}`}>
                                                    {role.role}
                                                </label>
                                            </div>
                                        </>


                                    ))}
                                </div>



                                <button type="submit" className="btn btn-primary">Registrati</button>
                                {/* {flag == true ? <div className={registrationFormStyle.errorMessage}><p  >Credenziali non valide</p></div> : ""} */}

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}