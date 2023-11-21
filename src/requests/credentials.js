
export const sampleRequest = (method, body=null, token=null) => {
    let credentials = {
        method,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        accept: "*/*",
        connection: "keep-alive"
    }

    // Get reqs avoid adding body error
    if (method !== 'GET') {
        credentials = { 
            ...credentials,
            body: JSON.stringify(body)
        }
    }
    
    return credentials
}