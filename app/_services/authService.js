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

    const loginUserAPI = async(formData) =>{
        const response = await fetch("http://127.0.0.1:8000/login",{
                method:"POST",
                headers:{
                    "content-type": "application/x-www-form-urlencoded",
                },
                body:formData
            })
        return response;
    };

    const getCurrentUserAPI = async() => {
        const response = await authAPIFetch("profile");
        // console.log(response);
        const result = await response.json();
        console.log(result);
        return result;
    };
  return {registerUserAPI, loginUserAPI, getCurrentUserAPI};
}
