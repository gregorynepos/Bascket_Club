import pool from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const saltRounds = 10;


//requêt pour crypter le mot de passe et inserer un user
export const CreationCompte = (req, res) => {
	bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
		pool.query(
			"INSERT INTO user (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
			[req.body.nom, req.body.prenom, req.body.email, hash],
			function (result) {
				res.json(result);
			}
		);
	});
};

//pour indentifier un user
const JWT_SIGN_SECRET = 'nnnr:hrqnvnrithgpingmNMZRJGP2IXIWUIEILFOZIji23536745836658939964647mfjfhjjieocnccujwji';

export const AdminLogin = (req, res) => {
	pool.query(
		"SELECT * FROM user WHERE email = ?",
		[req.body.email],
		function (error, result, fields) {
			if (result.length === 0) {
				res.json({ reponse: false, message: "L'identifiant n'existe pas" });
			} else {
				bcrypt.compare(
					req.body.password,
					result[0].password,
					function (err, result2) {
						if (!result2) {
							res.json({
								reponse: false,
								message: "Le mot de passe n'est pas correct",
							});
						} else {
							const id = result[0].id;
							const prenom = result[0].prenom;
							const token = jwt.sign({ id,prenom }, JWT_SIGN_SECRET, { expiresIn: '1h' });
							res.json({
								reponse: true,
								id: result[0].id,
								prenom: result[0].prenom,
								token
							});
						}
					},
				);
			}
		},
	);
};

// pour utilser le compte d'un utilisateur par l'identifiant.
export const GetAdminById = (req, res) => {
	let id = req.params.id;
	console.log(id);
	pool.query(
		"SELECT * FROM `user` WHERE id = ?",
		[req.params.id],
		function (error, user, fields) {
			res.json(user);
		},
	);
};
// pour modifier le compte d'un utilisateur

export const UpdateAdmin = (req, res) => {
	let id = req.params.id;
	bcrypt.hash(req.body.password, saltRounds, function (error, hash) {

		pool.query(
			'UPDATE user SET nom = ?, prenom = ?, email = ?, password = ? WHERE id =5',
			[req.body.nom, req.body.prenom, req.body.email, hash, req.params.id],
			function (error, user, fields) {

				res.json({ message: 'le compte est bien modifier', user }); //


			}
		);
	});
};




// pour supprimer le compte d'un utilisateur
export const SupprimerCompte = (req, res) => {
	let id = req.params.id;
	console.log(id);
	pool.query(
		"DELETE  FROM user WHERE id = ?",
		[req.params.id],
		function (result) {
			res.json(result);

		},
	);
};
