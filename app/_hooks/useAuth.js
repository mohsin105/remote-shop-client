"use client";
import apiFetch from '@/lib/apiFetch';
import React, { useEffect, useState } from 'react'
import authService from '../_services/authService';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const {registerUserAPI, loginUserAPI, getCurrentUserAPI} = authService();

    // const getToken = () =>{
    //     const token = localStorage.getItem("authTokens");
    //     return token? JSON.parse(token) : null;
    // };

    // const [authToken, setAuthToken] = useState(getToken());

    const registerUser = async(payload) => {
        await registerUserAPI(payload);
    };

    const logInUser = async(payload) =>{
        try {
            console.log("jsata");
            // const formData = new URLSearchParams();
            // formData.append("username",payload.username);
            // formData.append("password", payload.password)
            // const response = await loginUserAPI(formData);
            const response = await loginUserAPI(payload);
            console.log(response);

            const result = await response.json(); //the actual response payload. 
            console.log(result.message);
            console.log(response.status);
            if(response.status === 200)
            {
                await getCurrentUser();
                // const profileRes = await fetch("http://localhost:8000/profile", {
                //     credentials: "include"
                // });
                // const profileResult = await profileRes.json();
                // console.log("Profile result: -> ",profileResult);
                // if(profileRes.ok){
                //     console.log("Profile result resolved successfully. ")
                //     setUser(profileResult);
                // }
                // return profileResult;
                return {"success": true, "message":result.message}
            }
        } catch (error) {
            console.log(error);
            return {"success":false, "message":"Somthing went wrong"}
        }
    };

    const logOutUser = async() =>{
        console.log("jsata. clicking on log out button");
        // localStorage.removeItem("authTokens");
        const response = await apiFetch("logout",{
            method: "POST"
        })
        setUser(null);
        // setAuthToken(null);
        console.log("Logout Status: ", response.ok);
    }

    const getCurrentUser = async() =>{
        try {
            const response = await getCurrentUserAPI();
            console.log("Response on Getting Current User: ",response);
            if(response.success){
                setUser(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getCurrentUser();
        /*As we are no longer using authToken from localStoage So the code below is no longer needed*/
        // if(authToken)
        // {
        // }
        // else setUser(null);
    },[]);

    const updateUserProfile = async(payload) => {
        try {
            console.log("jsata");
        } catch (error) {
            console.log(error);
        }
    };

    const passwordChange = async(payload) => {
        try {
            console.log("jsata");
        } catch (error) {
            console.log(error);
        }
    };

    const resetPassword =  async(payload) => {
        try {
            console.log("jsata");
        } catch (error) {
            console.log(error);
        }
    };

    const resetPasswordConfirm = async(payload) => {
        try {
            console.log("jsata");
        } catch (error) {
            console.log(error);
        }
    };



    const handleAPIError = (error) => {

    };



  return {
    user, 
    errorMessage, 
    registerUser, 
    logInUser, 
    logOutUser, 
    updateUserProfile,
    passwordChange, 
    resetPassword, 
    resetPasswordConfirm
   }
}
