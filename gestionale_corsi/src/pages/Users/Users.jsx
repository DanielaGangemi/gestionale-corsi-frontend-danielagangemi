import { useEffect, useState } from "react";
import { UserTable } from "../../components/UserTable/UserTable";
import { getAllUsers } from "../../services/RESTservice";
import usersStyle from "./Users.module.css"

export function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        // così prende la lista di tutti i corsi
        async function findAll() {

            try {
                const coursesData = await getAllUsers();

                setUsers(coursesData);

            } catch (error) {

                console.error("Error fetching courses:", error);

            }
        }

        findAll();

    }, [])

    return (
        <>
            <h1 className={usersStyle.title}>Lista di tutti gli utenti</h1>


            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Cognome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Ruolo</th>
                                    <th scope="col">Azioni</th>
                                </tr>
                            </thead>
                            <tbody>

                                {users.map((user, index) => (
                                    <UserTable key={index} Name={user.name} Surname={user.surname} Email={user.email} Roles={user.roleList}></UserTable>
                                ))}



                            </tbody>
                        </table>
                    </div>

                </div>
            </div>




        </>
    )
}