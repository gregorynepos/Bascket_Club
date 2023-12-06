import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/router.js";
import { authVerify } from "./middleware/auth.js";


const app = express();
const PORT = 8000;


// autorisation des multiples requêtes du react au serveur
app.use(cors());
// permet d'analyser et de récupérer les informations json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));

//appel du routeur
app.use("/", router);

app.get("/",authVerify, (req,res) => {
	res.send(req.authToken)
});



app.get("/isUserAuth",authVerify,(req,res) => {
	res.send("tu es authentifié");
});





// CONNEXION AU SERVEUR
app.listen(PORT, () => {
	console.log(`Server started on port http://localhost:${PORT}`);
});