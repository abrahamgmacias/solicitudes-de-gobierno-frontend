import { store } from '../app/store';
import { url } from "./url";
import { setRole } from "../features/Login/roleSlice";
import { setToken } from "../features/Login/tokenSlice";
import { setFirstName, setLastName } from "../features/User/userSlice";

export async function loginUser(credentials) {
    return fetch(`${url}/auth/login`, credentials)
        .then((res) => {
            if (res.status === 404 || res.status === 401) {
                throw new Error("We had a problem logging you in. Try again.");
            }

            return res.json();
        })
        .then((json) => {
            const { nombre, apellido_paterno, token } = json;

            store.dispatch(setToken(token));
            store.dispatch(setFirstName(nombre));
            store.dispatch(setLastName(apellido_paterno));
            // store.dispatch(setRole(role));

            return { success: true, message: "You'll be redirected shortly..." }
            
        })
        .catch((err) => {
            return { success: false, message: err.message}
        });
}


export async function getLibro(credentials, libro_id=null) {
    // Allow to search by id
    let baseUrl = `${url}/libros`
    if (libro_id) {
        baseUrl += `/${libro_id}`
    }

    return fetch(`${baseUrl}`, credentials)
        .then((res) => {
            if (res.status === 500 || res.status === 401) {
                throw new Error("We had a problem logging you in. Try again.");
            }

            return res.json();
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
}