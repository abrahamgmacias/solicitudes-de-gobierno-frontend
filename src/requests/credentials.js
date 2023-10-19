
export const loginUserCredentials = (email, password) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    }
}