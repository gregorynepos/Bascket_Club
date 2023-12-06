import React from "react";
import { useState } from "react";


const SupprimerCompte = () => {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [MsgError, setError] = useState("");
  const id = window.location.search;
  console.log(id);

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
  const DeleteUser = (data) => {
    const urlSearchParams = new URLSearchParams();
    console.log(urlSearchParams);
    const id = urlSearchParams.get("id");
    console.log(id);

    fetch('/SupprimerCompte/:id', {
      method: "DELETE",
      body: JSON.stringify(data.id),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setMessage("compte supprimer");
        setTimeout(() => setMessage(false), 1000);
        setNom("");
        setPrenom("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  };

  const submit = (e) => {
    e.preventDefault();

    if (!nom || !prenom || !email || !password) {
      setError("Veuillez remplir tous les champs.");
    } else {
      setError("");
      const data = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
      };
      DeleteUser(data);
    }
  }; return (
    <>
      <section>
        <h1>Le formulaire pour Supprimer un compte </h1>
        {message !== "" && <p style={{ color: "red" }}>{message}</p>}
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
          {MsgError && <p style={{ color: "red" }}>{MsgError}</p>}
          <button className="value" id="button" type="submit" onClick={submit}>
            Valider le formulaire
          </button>
        </form>
      </section>
    </>
  );
};


export default SupprimerCompte;