import { AuthContext } from "./AuthContext";
import { useState } from "react";
import { getClaimCookie } from "../../services/CookieService";

export function AuthContextProvider({ children }) {

    const { name, surname, email, roles, token } = getClaimCookie();

    const [user, setUser] = useState({

        name: name,
        surname: surname,
        email: email,
        roles: roles,
        token: token,
        isAuthorized: token == null ? false : true

    })

    return (
        <>
            <AuthContext.Provider value={{ user, setUser }}>
                {children}
            </AuthContext.Provider>
        </>
    )


}