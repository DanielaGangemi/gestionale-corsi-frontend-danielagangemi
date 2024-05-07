import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


export function setLoginCookie(jwtToken) {

    const { token, ttl, tokenCreationTime } = jwtToken;

    Cookies.set("token", token);
    Cookies.set("ttl", ttl);
    Cookies.set("tokenCreationTime", tokenCreationTime)

    setClaimCookie(token)

}

export function setClaimCookie(token) {

    console.log(jwtDecode(token));
    const { name, surname, email, roles } = jwtDecode(token);

    Cookies.set("name", name);
    Cookies.set("surname", surname);
    Cookies.set("email", email);
    Cookies.set("roles", roles);

}