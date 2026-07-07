// import { headers } from 'next/headers'
const BASE_URL = "http://127.0.0.1:8000"

export default async function apiFetch(endpoint, options) {
    if (options !== undefined)
    {
        console.log("Options given")
        return fetch(`${BASE_URL}/${endpoint}`, {
          ...options,
          headers:{
              "Content-Type":"application/json",
              ...options?.headers, 
          },
        }
        );
    }
    else {
        // console.log("Without Options given. ")
        return fetch(`${BASE_URL}/${endpoint}`);
    }
}
