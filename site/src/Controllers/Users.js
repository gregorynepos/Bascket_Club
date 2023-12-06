import { useState, useEffect } from "react";
import axios from "../api/axios";



const Users = () => {
    const [user, setUsers] = useState();


    useEffect(() => {
        axios.get("/users")
            .then((response) => {

                setUsers(response.data);
            });
    }, []);
    if (!user)
        return null;

    return (
        <>
            <article>
                <h2>Liste des Utilisateurs</h2>

                <div>
                    <ul>
                        {user.map((user, i) => <li key={i}>{user.nom} {user.prenom} :  {user.email}</li>)}
                    </ul>
                </div>


                <br />
            </article>

        </>
    );
}


export default Users;