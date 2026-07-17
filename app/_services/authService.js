import apiFetch from '@/lib/apiFetch';
import authAPIFetch from '@/lib/authAPIFetch';
import React from 'react'

export default function authService() {
    const registerUserAPI = async(payload) => {
        try {
            console.log("jsata");
            
        } catch (error) {
            console.log(error);
        }
    };

    const loginUserAPI = async(payload) =>{
        const response = await fetch("http://localhost:8000/login",{
                method:"POST",
                credentials: "include",
                headers:{
                    "content-type": "application/json",
                },
                body:JSON.stringify(payload)
            })
        
        return response;
    };

    const getCurrentUserAPI = async() => {
        const response = await apiFetch("profile");
        console.log("without awaiting and jsonning the response: the raw response: ", response);
        const result = await response.json();
        return {"success":response.ok? true: false , "message":result}
    };
  return {registerUserAPI, loginUserAPI, getCurrentUserAPI};
}
