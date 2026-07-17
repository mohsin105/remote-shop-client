"use client";
import apiFetch from '@/lib/apiFetch';
import React, { useEffect, useState } from 'react'
import authService from '../_services/authService';

export default function useAuth(initialUser) {
    const [user, setUser] = useState(initialUser);
    const [errorMessage, setErrorMessage] = useState("");
    const {registerUserAPI, loginUserAPI, getCurrentUserAPI} = authService();


    const registerUser = async(payload) => {
        await registerUserAPI(payload);
    };

    const logInUser = async(payload) =>{
        try {
            console.log("jsata");
            const response = await loginUserAPI(payload);
            console.log(response);

            const result = await response.json(); //the actual response payload. 
            console.log(result.message);
            console.log(response.status);
            if(response.status === 200)
            {
                await getCurrentUser();
                return {"success": true, "message":result.message}
            }
        } catch (error) {
            console.log(error);
            return {"success":false, "message":"Somthing went wrong"}
        }
    };

    const logOutUser = async() =>{
        console.log("jsata. clicking on log out button");
        const response = await apiFetch("logout",{
            method: "POST"
        })
        setUser(null);
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

    // useEffect(()=>{
    //     getCurrentUser();
    // },[]);

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
