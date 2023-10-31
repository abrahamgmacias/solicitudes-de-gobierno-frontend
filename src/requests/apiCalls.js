import { Warning } from "postcss";
import { store } from '../app/store';
import { url } from "./url";
import { setToken } from "../features/Login/tokenSlice";
import { setFirstName, setLastName } from "../features/User/userSlice";

export async function loginUser(credentials) {
    return fetch(`${url}/login`, credentials)
        .then((res) => {
            if (res.status === 401) {
                new Warning("Email or password is incorrect.")
            }

            return res.json();
        })
        .then((json) => {
            const { first_name, last_name, token } = json;

            store.dispatch(setToken(token));
            store.dispatch(setFirstName(first_name));
            store.dispatch(setLastName(last_name));
        })
        .catch((err) => {
            console.log(err)
        });
}