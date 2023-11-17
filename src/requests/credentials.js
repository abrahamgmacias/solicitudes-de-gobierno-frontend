
export const loginUserCredentials = (email, password) => {
    return {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        accept: "*/*",
        connection: "keep-alive",
        body: JSON.stringify({
            "correo": email,
            "contrasena": password
        })
    }
}