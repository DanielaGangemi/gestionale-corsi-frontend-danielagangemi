import { getTokenCookie } from "./CookieService";
// ---- USER ENDPOINTS ----

// LOGIN
export async function login(body) {

    const response = await fetch("http://localhost:8080/api/user/login", {
        mode: "cors",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    if (response.status !== 200) {
        return 0;
    }

    return await response.json();

}

// REGISTRATION
export async function registration(body) {

    console.log(body)
    console.log(JSON.stringify(body))

    const response = await fetch("http://localhost:8080/api/user/registration", {
        mode: "cors",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    if (response.status !== 200) {
        return 0;
    }

    return 1;

}

// LOGOUT
export async function logout() {

    const token = getTokenCookie();

    const response = await fetch("http://localhost:8080/api/user/logout", {
        mode: "cors",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    if (response.status != 200) {
        return 0; // internal server error
    }

    return 1;

}