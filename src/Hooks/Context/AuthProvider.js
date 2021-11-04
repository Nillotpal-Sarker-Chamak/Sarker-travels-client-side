import React, { createContext } from "react";
import useFirebase from "../useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allData = useFirebase();
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;