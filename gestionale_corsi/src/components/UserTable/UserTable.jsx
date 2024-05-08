import { useState } from "react";
import { Link } from "react-router-dom";
import { getEmailCookie } from "../../services/CookieService";

export function UserTable(props) {

    const listRoles = props.Roles.map(item => item.roleType);
    const userEmail = getEmailCookie();




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
                    {userEmail == props.Email ? <></> :
                        <button className="btn btn-danger">
                            <Link to={`delete/${props.Email}`}>
                                <i className="bi bi-trash"></i>
                            </Link>
                        </button>
                    }
                </td>
            </tr>

        </>
    );
}