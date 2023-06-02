import React, { createContext } from 'react';

const AuthContext = ({children}) => {

    const Myauthcontext=createContext()
    const authinfo={}
    return (
        <Myauthcontext.Provider value={authinfo}>
            { children}
        </Myauthcontext.Provider >
    );
};

export default AuthContext;