import pool from "../config/database.js";

//requête pour afficher les données de toute la table articles 
export const ActuControllers = (req, res) => {
	pool.query(
		"SELECT * FROM articles",
		function (error, result) {
			console.log(error);
			console.log(result);
			res.json(result);
		},
	);
};
// edtider un article par son l'identifiant.
export const GetarticlesById = (req, res) => {
	let id = req.params.id;

	pool.query(
		"SELECT * FROM articles WHERE id = ?",
		[req.params.id],
		function (article) {
			res.json(article);
		},
	);
};

// Créer un nouvel article
export const AddActu = (req, res) => {
	pool.query(
		"INSERT INTO articles (title, descriptions,date,images_articles,alt_articles) VALUES (?, ?, ?, ?, ?)",
		[req.body.title, req.body.descriptions, req.body.date, req.body.images_articles, req.body.alt_articles],
		function (articles) {
			res.json(articles);
		}
	);
};

// modifier un article
export const EditeArticles = (req, res) => {
	let id = req.params.id;
	pool.query(
		"UPDATE articles SET title = ?, descriptions = ?, date = ?, images_articles = ?, alt_articles = ?  WHERE id = ?",
		[req.body.nom, req.body.prenom, req.body.email, req.body.id],
		function (result) {
			res.json(result);

		},
	);
};
// supprimer un article
export const deleteArticles = (req, res) => {
	let id = req.params.id;
	console.log(id);
	pool.query(
		"DELETE  FROM articles WHERE id = ?",
		[req.params.id],
		function (result) {
			res.json(result);

		},
	);
};