import React, {useState} from 'react'

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {}
});

const AuthContextProvider  = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    let loginHandler = () => {
        setIsAuthenticated(true);
    }

    let logoutHandler = () => {
        setIsAuthenticated(false);
    }

    return  <AuthContext.Provider value={{login: loginHandler, logout : logoutHandler, isAuth : isAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
}


export default AuthContextProvider;

