import React, { useContext } from "react";

import AuthContext from "../store/authContext";



const Auth = () => {
   
    const authCtx = useContext(AuthContext);

    const isloggedin = authCtx.isloggedin;
    
    return (
        <>
            <div className="Auth">
                {isloggedin && <p>Bonjour {authCtx.prenom}</p>}
                {!isloggedin && <button type="submit" className="bouton" onClick={authCtx.logout}>401 Unauthorized<br/><a href="/">vous n'êtes pas connectés ou vous n'êtes pas authorisés</a></button>}
                {isloggedin && <p>vous êtes connecter</p>}
                {isloggedin && <p>votre token : {authCtx.token} </p>}
                {isloggedin && <p>votre userid : {authCtx.userId} </p>}
                {isloggedin && <button type="submit" onClick={authCtx.logout}><a href="/login" >se deconnecter</a></button>}

            </div>
        </>
    )
}

export default Auth;