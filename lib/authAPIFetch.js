"use client";
import React from 'react'

const BASE_URL = 'http://127.0.0.1:8000';


export default function authAPIFetch(endpoint, options) {
    // const token = options.access_token;
    const token = localStorage.getItem("authTokens");

  return fetch(`${BASE_URL}/${endpoint}`,{
    ...options,
    headers:{
        Authorization: `Bearer ${JSON.parse(token)}`
    }
  });
}
