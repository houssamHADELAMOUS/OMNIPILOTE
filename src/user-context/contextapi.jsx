import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(); //define le context

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte directement
export const useAuth = () => {return useContext(AuthContext);};