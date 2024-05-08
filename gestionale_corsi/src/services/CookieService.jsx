import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


export function setLoginCookie(jwtToken) {

    const { token, ttl, tokenCreationTime } = jwtToken;

    const expire = new Date(ttl);

    Cookies.set("token", token, { expires: expire })

    return jwtDecode(token)

}

export function setClaimCookie(token) {

    const { name, surname, email, roles } = token;

    Cookies.set("name", name);
    Cookies.set("surname", surname);
    Cookies.set("email", email);
    Cookies.set("roles", roles);

}

export function getClaimCookie(){

    const userData = {
        name: Cookies.get("name"),
        surname: Cookies.get("surname"),
        email: Cookies.get("email"),
        roles: Cookies.get("roles"),
        token: Cookies.get("token")
    }

    return userData;

}