// import { headers } from 'next/headers'
const BASE_URL = "http://localhost:8000"

export default async function apiFetch(endpoint, options) {
    if (options !== undefined)
    {
        console.log("Options given");
        return fetch(`${BASE_URL}/${endpoint}`, {
          ...options,
          credentials:"include",  //important for Cookie system
          headers:{
              "Content-Type":"application/json",
              ...options?.headers, 
          },
        }
        );
    }
    else {
        // console.log("Without Options given. ")
        return fetch(`${BASE_URL}/${endpoint}`,{
            credentials:"include"
        });
    }
}
