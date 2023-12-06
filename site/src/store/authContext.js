import { createContext, useState } from "react";

//creations du context pour  l'authentification pour stocker les données : token,user.

const defaultValue = {

    token: "",
    userId: null,
    userIdLoggeIn: false,
    login: () => { },
    logout: () => { },
}

const AuthContext = createContext(defaultValue);

// le context provider pour enveloper app.js
export const AuthContextProvider = (props) => {
    //stockage du token d'authentification
    const [token, setToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [prenom, setPrenom] = useState(null);


    //une fonction pour mettre à jour le token dans le state
    const loginHandler = (token, userId, prenom) => {
        setToken(token);
        setuserId(userId);
        setPrenom(prenom)
    }

    //pour se déconnecter (faire passer le token à null)
    const logoutHandler = () => {
        setToken(null)
    }


    //si il y a présence du token ça veut dire que je suis loggé
    //convertir le token en valeur booleénne

    const userIdLoggeIn = !!token;
    console.log("-->userIdLoggeIn");
    console.log(userIdLoggeIn);

    const contextValue = {
        token: token,
        userId: userId,
        prenom: prenom,
        isloggedin: userIdLoggeIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
