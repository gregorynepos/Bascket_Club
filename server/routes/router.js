import express from "express";
const router = express.Router();


import MediaControllers from "../controllers/MediaControllers.js";
import StagesControllers from "../controllers/StagesControllers.js";
import EquipeControllers from "../controllers/EquipeControllers.js";
import {
    CreationCompte,
    AdminLogin,
    SupprimerCompte,
    GetAdminById,
    UpdateAdmin
} from "../controllers/AdminController.js";
import {
    ActuControllers,
    AddActu,
    EditeArticles,
    GetarticlesById,
    deleteArticles
} from "../controllers/ActuControllers.js";
import { AllUsers, login} from "../controllers/UserControllers.js";
import{authVerify} from"../middleware/auth.js";


//CLIENT 

router.get("/Actualites",ActuControllers);
router.get("/Equipes", EquipeControllers);
router.get("/Medias", MediaControllers);
router.get("/Stages", StagesControllers);


// ADMIN
router.post("/CreationCompte", CreationCompte,authVerify);//admin (verify token & role)
router.get("/getUser/:id", AdminLogin);
router.delete("/SupprimerCompte/:id", SupprimerCompte,authVerify);//protection logger admin ( verify token & role)
router.post("/AdminLogin", AdminLogin,authVerify);
router.get("/GetAdminById/:id", GetAdminById,authVerify);//admin (verify token & role) cet route est fonctionnelle mais pas utiliser pour le moment
router.post("/UpdateAdmin/:id",UpdateAdmin,authVerify);//admin (verify token & role)
router.get("/users",AllUsers)

//router.get("/verifyJWT",verifyJWT);

//ACTU Coté ADMIN
router.get("/GetarticlesById", GetarticlesById)
router.get("/AllActus", ActuControllers,authVerify);// secretaire ,admin (verifytoken/ verify token & role)
router.post("/AddActu", AddActu,authVerify);// secretaire,admin (verifytoken/ verify token & role)
router.delete("/deleteArticles/:id", deleteArticles,authVerify);// secretaire,admin (verifytoken/ verify token & role)
router.post("/editeArticles/:id", EditeArticles,authVerify);// secretaire,admin (verifytoken/ verify token & role)

//test

router.post("/login",login,authVerify);
router.get("/auth",authVerify);





export default router;