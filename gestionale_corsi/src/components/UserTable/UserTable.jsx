export function UserTable(props) {

    const listRoles = props.Roles.map(item => item.roleType);
    console.log(listRoles)

    return (
        <>
            {/* <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ruolo</th>
                        <th scope="col">Azioni</th>
                    </tr>
                </thead>
                <tbody> */}
            <tr>
                <th>{props.Name}</th>
                <td>{props.Surname}</td>
                <td>{props.Email}</td>
                <td>
                    {listRoles.map((role, i) => (
                        <p key={i}>{JSON.stringify(role).replace(/"/g, '')} </p>
                    ))}
                </td>

                {/* <td>{JSON.stringify(listRoles)}</td> */}
                <td><button className="btn btn-warning"><i class="bi bi-pencil"></i></button> <button className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
            </tr>
            {/* <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    );
}