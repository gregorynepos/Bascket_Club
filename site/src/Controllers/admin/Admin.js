import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



import AllActus from "./AllActus";
import AddActu from "./AddActu";
import CreationCompte from "./CreationCompte";
import ModifierCompte from "./ModifierCompte";
import SupprimerCompte from "./SupprimerCompte";
import Users from "../Users";


const Admin = () => {
	const [onglet, setOnglet] = useState(1);
	const navigate = useNavigate();


	useEffect(() => { }, [navigate]);

	return (
		<>
			<section>
				<h1>Tableau de bord Administrateur</h1>
				

				<nav-admin>

					<br />
					
					<div>
						<button type="button" className="button login__submit" onClick={() => setOnglet(1)}>
							<span> Supprimer un compte</span>
						</button>
					</div>
					<div>
						<button type="button" className="button login__submit" onClick={() => setOnglet(2)}>
							<span>Modifier un compte</span>
						</button>
					</div>
					<div>
						<button type="button" className="button login__submit" onClick={() => setOnglet(3)}>
							<span>Créer un compte</span>
						</button>
					</div>
					<div>
						<button type="button" className="button login__submit" onClick={() => setOnglet(4)}>
							<span>Afficher tous les Articles</span>
						</button>
					</div>
					<div>
						<button type="button" className="button login__submit" onClick={() => setOnglet(5)}>
							<span>Ajouter un Articles</span>
						</button>
					</div>
					<div>
						<button type="button" className="button login__submit" onClick={() => setOnglet(6)}>
							<span>Listes des utilisateurs</span>
						</button>
					</div>
				</nav-admin>

				<div>
					{/* animation pour faire apparaître les onglet en utilisant un ternaires */}
					{onglet === 1 && <SupprimerCompte />}
					{onglet === 2 && <ModifierCompte />}
					{onglet === 3 && <CreationCompte />}
					{onglet === 4 && <AllActus />}
					{onglet === 5 && <AddActu />}
					{onglet === 6 && <Users />}

				</div>
				
			</section>

		</>
	);
};

export default Admin;
