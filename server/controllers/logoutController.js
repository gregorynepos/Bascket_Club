const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}


const fsPromises = require('fs').promises;
const path = require('path'); 



const handlerLogout= async (req, res) => {
// pour supprimer l'enssemble de L'accesstoken de l'utilisateur


    const cookie = req.cookie;
    if (!cookie?.jwt) return res.sendStatus(204);// pas de contenu
    const refreshToken = cookie.jwt;

    //c'est les refreshTokens dans la bdd
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
        
        res.clearCookie('jwt',{httpOnly: true });
        return res.sendStatus(204);
    }
   
    //supprimer les refreshToken dans la bdd
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = {...foundUser, refreshToken: ''};
    usersDB.setUsers([...otherUsers, currentUser]);
    
    await fsPromises.writeFile(
        path.join(__dirname,'..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

      res.clearCookie('jwt', {httpOnly: true});
      res.sendStatus(204);
}

export default { handlerLogout };
