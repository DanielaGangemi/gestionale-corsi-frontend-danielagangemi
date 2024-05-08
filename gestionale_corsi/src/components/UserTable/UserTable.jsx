import { Link } from "react-router-dom";

export function UserTable(props) {

    const listRoles = props.Roles.map(item => item.roleType);

    return (
        <>

            <tr>
                <th>{props.Name}</th>
                <td>{props.Surname}</td>
                <td>{props.Email}</td>
                <td>
                    {listRoles.map((role, i) => (
                        <p key={i}>{JSON.stringify(role).replace(/"/g, '')} </p>
                    ))}
                </td>

                <td>
                    <button className="btn btn-warning">
                        <Link to={`update/${props.Email}`}>
                            <i className="bi bi-pencil"></i>
                        </Link>
                    </button>
                    <button className="btn btn-danger">
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}