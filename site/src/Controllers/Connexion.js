import { useContext, useState} from "react";
import { useNavigate} from "react-router-dom";
import AuthContext from "../store/authContext";



const Connexion = () => {

	
	const authCtx = useContext(AuthContext);
	console.log("-->authCtx");
	console.log(authCtx.token);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	
	//useNavigate permet d'effectuer une redirection
	const navigate = useNavigate();


	// permet de récupèrer des valeurs dans les inputs
	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
	


		//envoi des données en POST

		let user = {
			email: email,
			password: password,
		};
			
		 let req = new Request("/Adminlogin", {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}); 

		fetch(req)
			.then((response) => response.json())
			
			.then((response) => {

				if (response.reponse === true) {
					setEmail("");
					setPassword("");
					navigate("/Admin");
					console.log(response);
					authCtx.login(response.token,response.id,response.prenom)
				} else {

					setMessage(response.message);
				}
			})
			
			.then((response) => localStorage.setItem('token',response.token))
			
			
		
			
	}; 
	

	return (
		<>
			<div className="container-login">
				<div className="screen-login">

					<div className="screen__content">
						<form className="login" >
							<div className="login__field">
								<i className="login__icon fas fa-user"></i>
								<input type="text" class="login__input" name="email" placeholder="Email"
									value={email} onChange={changeEmail} />

							</div>
							<div className="login__field">
								<i className="login__icon fas fa-lock"></i>
								<input type="password" class="login__input" name="password"
									placeholder="Password" value={password} onChange={changePassword} />
								{ /* message à afficher en cas d'erreur */}
								<p style={{ color: "red" }}>{message}</p>
							</div>
							<button type="button" className="button login__submit" onClick={submit}>
								<span className="button__text">se connecter</span>
								<i className="button__icon fas fa-chevron-right"></i>
							</button>
						</form>

					</div>
					<div className="screen__background">
						<span className="screen__background__shape screen__background__shape4"></span>
						<span className="screen__background__shape screen__background__shape3"></span>
						<span className="screen__background__shape screen__background__shape2"></span>
						<span className="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>


		</>
	);
};
export default Connexion; 
