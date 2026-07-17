"use client";
import { createContext } from "react";
import useAuth from "../_hooks/useAuth";

const AuthContext = createContext();

export const AuthProvider = ({children, initialUser}) =>{
    const allValues = useAuth(initialUser);

    return(
        <AuthContext.Provider value={allValues} >{children}</AuthContext.Provider>
    );
};

export default AuthContext;