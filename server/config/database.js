import mysql from "mysql";

let pool = mysql.createPool({
	connectionLimit: 10000,
	host: "db.3wa.io", // on rentre l'hôte l'adresse url où se trouve la bdd // root
	user: "gregorynepos", // identifiant BDD
	password: "94daa826a1480052534c590d8f1aaef6", // le password
	database: "gregorynepos_basketball", // nom de la base de donnée
});

// Connexion à la DB
pool.getConnection((err, connection) => {
	console.log("Connected to the database");
	if (err) throw err;
});

export default pool;
