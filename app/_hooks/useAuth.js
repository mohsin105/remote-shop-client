"use client";
import apiFetch from '@/lib/apiFetch';
import React, { useEffect, useState } from 'react'
import authService from '../_services/authService';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const {registerUserAPI, loginUserAPI, getCurrentUserAPI} = authService();

    const getToken = () =>{
        const token = localStorage.getItem("authTokens");
        return token? JSON.parse(token) : null;
    };

    const [authToken, setAuthToken] = useState(getToken());

    const registerUser = async(payload) => {
        await registerUserAPI(payload);
    };

    const logInUser = async(payload) =>{
        try {
            console.log("jsata");
            const formData = new URLSearchParams();
            formData.append("username",payload.username);
            formData.append("password", payload.password)
            const response = await loginUserAPI(formData);
            // console.log(response);
            const result = await response.json(); //the actual token. 
            // console.log(result);
            // console.log(response.status);
            if(response.status === 200)
            {
                localStorage.setItem("authTokens", JSON.stringify(result.access_token));
                await getCurrentUser();
                return {"success": true, "message":"Login Successfull"}
            }
        } catch (error) {
            console.log(error);
            return {"success":false, "message":"Somthing went wrong"}
        }
    };

    const logOutUser = async() =>{
        console.log("jsata. clicking on log out button");
        localStorage.removeItem("authTokens");
        setUser(null);
        setAuthToken(null);
    }

    const getCurrentUser = async() =>{
        try {
            const response = await getCurrentUserAPI();
            console.log("Response on Getting Current User: ",response);
            setUser(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        if(authToken)
        {
            getCurrentUser();
        }
        else setUser(null);
    },[authToken]);

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
