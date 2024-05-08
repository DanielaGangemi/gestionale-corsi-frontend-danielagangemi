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

// FIND USER BY EMAIL
export async function getUserByEmail(email) {


    const response = await fetch(`http://localhost:8080/api/user/showuser?email=${email}`, {
        mode: "cors",
        method: "GET",

    })

    if (response.status != 200) {
        return 1;
    }

    return await response.json();

}

// FIND ALL
export async function getAllUsers() {


    const response = await fetch("http://localhost:8080/api/user/all", {
        mode: "cors",
        method: "GET",

    })

    if (response.status != 200) {
        return 1;
    }

    return await response.json();



}

// UPDATE
export async function updateUser(user) {

    const response = await fetch("http://localhost:8080/api/user/update", {
        mode: "cors",
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)

    })

    if (response.status !== 200) {
        return 0;
    }

    return 1;

}

// DELETE USER
export async function deleteUser(email) {

    const response = await fetch(`http://localhost:8080/api/user/delete/${email}`, {
        mode: "cors",
        method: "DELETE"
    })

    if (response.status != 200) {

        return 1;

    }

    return 0;


}


// ------ CORSI -------

// FIND ALL CORSI
export async function listCourses() {

    const token = getTokenCookie();

    const response = await fetch("http://localhost:8080/api/course", {
        mode: "cors",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    if (response.status != 200) {
        return 0; // internal server error
    }

    return await response.json();


}

// GET COURSE BY ID
export async function getCourse(id) {


    const token = getTokenCookie();

    const response = await fetch(`http://localhost:8080/api/course/${id}`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    if (response.status == 404) {
        return 1; // not found
    }

    if (response.status == 400) {
        return 0; // bad request
    }

    // console.log(await response.json())

    return await response.json();

}

// INSERT COURSE
export async function insertCourse(body) {

    const token = getTokenCookie();

    const response = await fetch("http://localhost:8080/api/course", {
        mode: "cors",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    })

    console.log(response.status)

    if (response.status !== 200) {
        return 0;
    }

    return 1;

}

// DELETE COURSE
export async function deleteCourse(id) {

    const token = getTokenCookie();

    const response = await fetch(`http://localhost:8080/api/course/${id}`, {
        mode: "cors",
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })

    if (response.status != 200) {

        return 1;

    }

    return 0;


}


// ---- CATEGORIES ----
export async function getCategories() {

    const response = await fetch("http://localhost:8080/api/category", {
        mode: "cors",
        method: "GET",

    })

    if (response.status != 200) {
        return 0; // internal server error
    }

    return await response.json();

}