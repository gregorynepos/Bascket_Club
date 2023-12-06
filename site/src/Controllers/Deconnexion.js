import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
	const navigate = useNavigate();
	

	useEffect(() => {
		
		navigate("/");
	},);

	return <>
	
	
	</>;
};

export default Deconnexion;
