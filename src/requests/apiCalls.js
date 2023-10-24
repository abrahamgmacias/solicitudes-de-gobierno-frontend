import { Warning } from "postcss";
import { store } from '../app/store';
import { url } from "./url";
import { setToken } from "../features/Login/tokenSlice";


export async function loginUser(credentials) {
    return fetch(`${url}/login`, credentials)
        .then((res) => {
            if (res.status === 401) {
                Warning("Email or password is incorrect.")
            }

            return res.json();
        })
        .then((json) => {
            store.dispatch(setToken(json.token));
        })
        .catch((err) => {
            console.log("error")
        });
}