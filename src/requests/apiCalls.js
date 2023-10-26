import { Warning } from "postcss";
import { store } from '../app/store';
import { url } from "./url";
import { setToken } from "../features/Login/tokenSlice";


export async function loginUser(credentials) {
    return fetch(`${url}/login`, credentials)
        .then((res) => {
            if (res.status === 401) {
                new Warning("Email or password is incorrect.")
            }

            return res.json();
        })
        .then((json) => {
            const token = json.token;
            store.dispatch(setToken(token));
        })
        .catch((err) => {
            console.log(err)
        });
}