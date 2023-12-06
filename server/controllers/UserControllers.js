import pool from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const saltRounds = 10;


export const UserRegister = (req, res) => {
	bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
		pool.query(
			"INSERT INTO user (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
			[req.body.nom, req.body.prenom, req.body.email, hash],
			function (error, result, fields) {
				res.json(result);
			},
		);
	});
};

export const UserLogin = (req, res) => {
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
							res.json({
								reponse: true,
								id: result[0].id,
							});
						}
					},
				);
			}
		},
	);
};

export const GetUserById = (req, res) => {
	let id = req.params.id;
	console.log(id);
	pool.query(
		"SELECT * FROM `user` WHERE id = ?",
		[id],
		function (error, user, fields) {
			res.json(user[0]);
		},
	);
};

export const AllUsers = (req, res) => {
	
	pool.query(
		"SELECT * FROM user",
		function (error, result) {
			console.log(error);
			console.log(result);
			res.json(result);
		},
	);
};

export const UpdateUser = (req, res) => {
	bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
		pool.query(
			"UPDATE user SET nom = ?, prenom = ?, email = ?, password = ? WHERE id = ?",
			[req.body.nom, req.body.prenom, req.body.email, hash, req.body.id],
			function (error, result, fields) {
				res.json(result);
			},
		);
	});
};
const JWT_SIGN_SECRET = 'nnnr:hrqnvnrithgpingmNMZRJGP2IXIWUIEILFOZIji23536745836658939964647mfjfhjjieocnccujwji';
export const login = (req, res) => {
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