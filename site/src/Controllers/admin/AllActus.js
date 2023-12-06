
import React from 'react';
import { useEffect, useState } from "react";
// même methode qu'un fetch sauf que axios est un packtages et le fetch est integrer au navigateur.
import axios from 'axios';

function AllActus() {

	const [Actus, setActus] = useState([]);
	//permet de récuperer les données des articles 
	useEffect(() => {
		axios.get("/AllActus")
			.then((response) => {

				setActus(response.data);
			});
	}, []);
	if (!Actus)
		return null;


	const deleteArticles = (id) => {
		//permet d'appliquer la methode delete pour pouvoir supprimer l'articles par l'id 
		console.log(id);
		axios({ method: 'delete', url: 'http://localhost:8000/deleteArticles/' + id })
			.then((res) => setActus(res.Actus))
			.catch(console.error());

	};


	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Images</th>
						<th>titre</th>
						<th>descriptions</th>
						<th>date</th>
					</tr>
				</thead>
				<tbody>
					{/* map pour afficher tous les articles  */}
					{Actus.map((actus, i) => {
						return (
							<tr key={i}>
								<td>
									<img style={{ maxWidth: "100px" }} src={"img/" + actus.images_articles} alt={actus.alt_articles} />
								</td>
								<td>{actus.id}</td>
								<td>{actus.title}</td>
								<td>{actus.descriptions}</td>
								<td>{actus.date}</td>
								<td>
									<button style={{ color: 'red' }} onClick={() => deleteArticles(actus.id)}>Supprimer</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default AllActus; 
