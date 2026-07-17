import React from 'react'
import { cookies } from "next/headers";

const BASE_URL = "http://localhost:8000";
export default async function apiServer(endpoint, options = {}) {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;
    // console.log("The access Tokens: ",accessToken);
    const requestHeaders = {
        "Content-Type": "application/json",
        ...options.headers
    };

    if(accessToken){
        requestHeaders.Cookie = `access_token=${accessToken}`;
    }
    // console.log("Headers from server side request: ", requestHeaders);
    return fetch(`${BASE_URL}/${endpoint}`,{
        ...options,
        headers:requestHeaders
    })
}
