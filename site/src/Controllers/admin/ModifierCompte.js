import React from "react";
import { useState } from "react";


const ModifierCompte = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [MsgError, setError] = useState("");




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
  const updateUser = (data) => {

    fetch("/UpdateAdmin/:id", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setMessage("modification valider");
        setTimeout(() => setMessage(false), 1000);
        setNom("");
        setPrenom("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
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
      updateUser(data);
    }
  };

  return (
    <section>
      <h1>Le formulaire pour Modifier un compte </h1>
      <form onSubmit={handleSubmit}>
        {message && <p>{message}</p>}
        <div className="field">
          <label htmlFor="nom">Votre nom</label>
          <div className="value">
            <input
              type="nom"
              name="nom"
              id="nom"
              placeholder="votre nom"
              value={nom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="prenom">prenom</label>
          <div className="value">
            {" "}
            <input
              type="prenom"
              name="prenom"
              id="prenom"
              placeholder=" prenom"
              value={prenom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Votre email</label>
          <div className="value">
            {" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="password">Mot de passe :</label>
          <div className="value">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
              value={password}
            />
          </div>
        </div>
        {MsgError && <p>{MsgError}</p>}
        <button type="submit">Modifier</button>
      </form>
    </section>
  );
};

export default ModifierCompte;