import React from "react";
import { useState } from "react";

const CreationCompte = () => {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    console.log("handleChange", e.target.id, e.target.value);
    e.preventDefault();

    switch (e.target.id) {
      case "nom":
        setNom(e.target.value);
        break;
      case "prenom":
        setPrenom(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };

  const submit = () => {

    console.log("submit", nom, prenom, email, password);
    let datas = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
    };
    //permet d'envoyer une requête POST
    let req = new Request("/CreationCompte ", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // permet d'envoyer la demande à l’aide de l’API fetch
    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        if (response.message === "") {
          setNom("");
          setPrenom("");
          setEmail("");
          setPassword("");
        } else {
          setMessage(response.message);
        }
      });
  }; return (
    <>
      <section>
        <h1>Le formulaire pour Créer un compte </h1>
        {message !== "" && <p>{message}</p>}
        <form>
          <div className="field">
            <label htmlFor="nom">Votre nom</label>
            <div className="value">
              <input type="nom" id="nom" value={nom} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="prenom">prenom</label>
            <div className="value">
              <input
                type="prenom"
                id="prenom"
                value={prenom}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Votre email</label>
            <div className="value">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="password">mots de passe</label>
            <div className="value">
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="value" id="button" type="submit" onClick={submit}>
            Valider le formulaire
          </button>
        </form>
      </section>
    </>
  );
};

export default CreationCompte;