import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Controllers/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Club from "./Components/HistoryClub";
import Actualites from "./Controllers/Actualites";
import Equipes from "./Controllers/Equipes";
import Medias from "./Controllers/Medias";
import Contact from "./Components/Contact";
import Adhesions from './Components/Adhesions';
import Stages from './Components/Stages';
import Admin from "./Controllers/admin/Admin";
import Connexion from "./Controllers/Connexion";
import CreationCompte from "./Controllers/admin/CreationCompte";
import EditeUser from "./Controllers/admin/ModifierCompte";
import SupprimerCompte from "./Controllers/admin/SupprimerCompte";
import AllActus from "./Controllers/admin/AllActus";
import AddActu from "./Controllers/admin/AddActu";
import Users from "./Controllers/Users";
import Auth from "./Components/Auth.js";
import AuthContext from "./store/authContext";
import { useContext } from 'react';


function App() {
  
  const authCtx = useContext(AuthContext);
  const isloggedin = authCtx.isloggedin;

  return (
    <>

      <Header />
      <Nav />
      {isloggedin && <Auth/>}

        <BrowserRouter>
          <Routes>
            {/*Routes Public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/Club" element={<Club />} />
            <Route path="/Actualites" element={<Actualites />} />
            <Route path="/Equipes" element={<Equipes />} />
            <Route path="/Medias" element={<Medias />} />
            <Route path="/Adhesions" element={<Adhesions />} />
            <Route path="/Stages" element={<Stages />} />
            <Route path="/Contact" element={<Contact />} />

            {/*Routes Proteger */}
            <Route element={!isloggedin && <Auth />} >   
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Admin" element={< Users />} />
            <Route path="/Admin" element={<CreationCompte />} />
            <Route path="/Admin" element={<EditeUser />} />
            <Route path="/Admin" element={<SupprimerCompte />} />
            <Route path="/Admin" element={<AllActus />} />
            <Route path="/Admin" element={<AddActu />} />
            <Route path="/Admin" element={<AddActu />} />
            <Route path="/Admin" element={<AddActu />} />
            </Route>  

          </Routes>
        </BrowserRouter>
     
      <Footer />
    </>
  );
}

export default App;