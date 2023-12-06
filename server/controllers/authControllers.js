import { auth } from "../middleware/auth";
import pool from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SIGN_SECRET = 'nnnr:hrqnvnrithgpingmNMZRJGP2IXIWUIEILFOZIji23536745836658939964647mfjfhjjieocnccujwji';
const express = require('express');
const app = express();


app.post('/login2', auth, (req,res)=> {

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


}) 